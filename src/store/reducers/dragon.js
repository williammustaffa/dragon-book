import Dragon from "store/models/Dragon";
import types from "store/types";

const reducer = (state = Dragon.state, { type, payload }) => {
  switch (type) {

    // Fetch dragon
    case types.FETCH_DRAGON:
      return {
        ...state,
        isFetching: true,
        details: new Dragon(),
        errorMessage: ""
      };

    case types.FETCH_DRAGON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        details: new Dragon(payload),
        errorMessage: ""
      };

    case types.FETCH_DRAGON_FAILURE:
      return {
        ...state,
        isFetching: false,
        details: new Dragon(),
        errorMessage: payload.message,
      };

    // Create dragon
    case types.CREATE_DRAGON:
      return {
        ...state,
        isFetching: true,
        details: new Dragon(),
        errorMessage: ""
      };

    case types.CREATE_DRAGON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        details: new Dragon(payload),
        errorMessage: ""
      };

    case types.CREATE_DRAGON_FAILURE:
      return {
        ...state,
        isFetching: false,
        details: new Dragon(),
        errorMessage: payload.message,
      };

    // Update dragon
    case types.UPDATE_DRAGON:
      return {
        ...state,
        isFetching: true,
        details: new Dragon(),
        errorMessage: ""
      };

    case types.UPDATE_DRAGON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        details: new Dragon(payload),
        errorMessage: ""
      };

    case types.UPDATE_DRAGON_FAILURE:
      return {
        ...state,
        isFetching: false,
        details: new Dragon(),
        errorMessage: payload.message,
      };

    // Delete dragon
    case types.DELETE_DRAGON:
      return {
        ...state,
        isFetching: true,
        details: new Dragon(),
        errorMessage: ""
      };

    case types.DELETE_DRAGON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        details: new Dragon(),
        errorMessage: ""
      };

    case types.DELETE_DRAGON_FAILURE:
      return {
        ...state,
        isFetching: false,
        details: new Dragon(),
        errorMessage: payload.message,
      };

    default:
      return state;
  }
}

export default reducer;