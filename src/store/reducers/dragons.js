import Dragons from "store/models/Dragons";
import types from "store/types";

const reducer = (state = Dragons.state, { type, payload }) => {
  switch (type) {
    case types.FETCH_DRAGONS:
      return {
        ...state,
        isFetching: true,
        items: [],
        errorMessage: ""
      };

    case types.FETCH_DRAGONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: new Dragons(payload).items,
        errorMessage: ""
      };

    case types.FETCH_DRAGONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        items: [],
        errorMessage: payload.message,
      };

    default:
      return state;
  }
}

export default reducer;