
import database from "store/api/database";
import * as R from "ramda";
import { v1 as uuidv1 } from 'uuid';
import request from "./request";

const AUTH_TOKEN_KEY = "auth.token";

class API {
  /**
   * Fake API error delay
   * @param {String} value 
   * @param {Int} time 
   */
  static retrieveDataDelayed(value, time = 500) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), time);
    });
  }

  /**
   * Fake API error delay
   * @param {String} value 
   * @param {Int} time 
   */
  static retrieveErrorDelayed(value, time = 500) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject({ message: value }), time);
    });
  }

  /**
   * Create token for user
   * @param {*} param
   */
  static tokenize({ id, email }) {
    return btoa(JSON.stringify({ id, email }));
  }

  /**
   * Get user info from token
   */
  static getTokenizedInfo() {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
  
    return token && JSON.parse(atob(token));
  }

  /**
   * Parse response object
   * @param {*} res 
   */
  static parseReponse(res) {
    return res.data;
  }

  /**
   * Create a user profile
   */
  createProfile = (payload) => {
    const errors = [];

    const existingUserEmail = database.queryAll("profiles", {
      query: { email: payload.email }
    });

    const existingUserUsername = database.queryAll("profiles", {
      query: { username: payload.username }
    });

    if (existingUserEmail.length) {
      errors.push("The email address provided is already in use.");
    }

    if (existingUserUsername.length) {
      errors.push("The username provided is already in use.");
    }

    if (errors.length) {
      return API.retrieveErrorDelayed(errors.join("\r\n"));
    }

    database.insert("profiles", {
      id: uuidv1(),
      email: payload.email,
      username: payload.username,
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      password: payload.password,
      registrationDate: Date.now(),
    });

    database.commit();

    // Create user and login
    return this.userLogin(payload);
  }

  /**
   * Check user session an then populate data if needed
   */
  userCheckSession = () => {
    const data = API.getTokenizedInfo();

    const results = database.queryAll("profiles", {
      query: { id: data && data.id },
    });

    if (!results.length) {
      return API.retrieveErrorDelayed("No session found.");
    }

    const user = R.clone(results[0]);

    // No need to delay on first load
    return user;
  }

  /**
   * Do user login by given crendentials
   * @param {object} credentials 
   */
  userLogin({ email, password }) {
    const results = database.queryAll("profiles", {
      query: { email, password },
    });

    if (!results.length) {
      return API.retrieveErrorDelayed("You have entered an invalid username or password");
    }

    const user = R.clone(results[0]);

    // Fake a token storage
    localStorage.setItem(AUTH_TOKEN_KEY, API.tokenize(user));

    return API.retrieveDataDelayed(user, 3000);
  }

  /**
   * Clear user session when he loogs out
   */
  userLogout = () => {
    // Clear token
    localStorage.removeItem(AUTH_TOKEN_KEY);

    return API.retrieveDataDelayed(null, 0);
  }

  /**
   * List dragons
   */
  listDragons = () => {
    return request
      .get("/dragon")
      .then(API.parseReponse);
  }

  /**
   * Get dragon details
   * @param {String} id
   */
  getDragon = (id) => {
    return request
      .get(`/dragon/${id}`)
      .then(API.parseReponse);
  }

  /**
   * Get dragon details
   * @param {Object} data
   */
  createDragon = (data) => {
    return request
      .post("/dragon", data)
      .then(API.parseReponse);
  }

  /**
   * Update dragon details
   * @param {Object} data
   */
  updateDragon = (data) => {
    return request
      .put(`/dragon/${data.id}`, data)
      .then(API.parseReponse);
  }

  /**
   * Update dragon details
   * @param {String} data
   */
  deleteDragon = (id) => {
    return request
      .put(`/dragon/${id}`)
      .then(API.parseReponse);
  }
}

// Create a cached connector
let connectorInstance = null;

function getAPIConnector() {
  if (!connectorInstance) {
    connectorInstance = new API();
  }

  return connectorInstance;
}


export { API, getAPIConnector };