import User from "store/models/User";
import types from "store/types";

const reducer = (state = User.state, { type, payload }) => {
  switch (type) {
    case types.CREATE_PROFILE:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
        profile: new User(),
        errorMessage: ""
      };

    case types.CREATE_User_FAILURE:
      return {
        ...state,
        isFetching: false,
        profile: new User(),
        errorMessage: payload.message
      };

    case types.USER_CHECK_SESSION:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
        profile: new User(),
        errorMessage: ""
      };

    case types.USER_CHECK_SESSION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        profile: new User(payload)
      };

    case types.USER_CHECK_SESSION_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
      };

    case types.USER_LOGOUT:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        profile: new User(),
        errorMessage: ""
      };

    case types.USER_LOGIN:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
        profile: new User(),
        errorMessage: ""
      };

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        profile: new User(payload)
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        errorMessage: payload.message
      };

    default:
      return state;
  }
}

export default reducer;