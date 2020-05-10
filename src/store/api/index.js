
import database from "store/api/database";
import * as R from "ramda";
import { v1 as uuidv1 } from 'uuid';
import request from "./request";

const AUTH_TOKEN_KEY = "auth.token";

const retrieveDataDelayed = (value, time = 500) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), time);
  });
}

const retrieveErrorDelayed = (value, time = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ message: value }), time);
  });
}

const tokenize = ({ id, email }) => {
  return btoa(JSON.stringify({ id, email }));
}

const getTokenizedInfo = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  return token && JSON.parse(atob(token));
}

class API {
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
      return retrieveErrorDelayed(errors.join("\r\n"));
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
    const data = getTokenizedInfo();

    const results = database.queryAll("profiles", {
      query: { id: data && data.id },
    });

    if (!results.length) {
      return retrieveErrorDelayed("No session found.");
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
      return retrieveErrorDelayed("You have entered an invalid username or password");
    }

    const user = R.clone(results[0]);

    // Fake a token storage
    localStorage.setItem(AUTH_TOKEN_KEY, tokenize(user));

    return retrieveDataDelayed(user, 3000);
  }

  /**
   * Clear user session when he loogs out
   */
  userLogout = () => {
    // Clear token
    localStorage.removeItem(AUTH_TOKEN_KEY);

    return retrieveDataDelayed(null, 0);
  }

  /**
   * List dragons
   */
  listDragons = () => {
    return request
      .get("/dragon");
  }

  /**
   * Get dragon details
   * @param {String} id
   */
  getDragon = (id) => {
    return request
      .get(`/dragon/${id}`);
  }

  /**
   * Get dragon details
   * @param {Object} data
   */
  createDragon = (data) => {
    return request
      .post("/dragon", data);
  }

  /**
   * Update dragon details
   * @param {Object} data
   */
  updateDragon = (data) => {
    return request
      .put(`/dragon/${data.id}`, data);
  }

  /**
   * Update dragon details
   * @param {String} data
   */
  deleteDragon = (id) => {
    return request
      .put(`/dragon/${id}`);
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