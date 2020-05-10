import Dragon from "store/models/Dragon";
import types from "store/types";

const reducer = (state = Dragon.state, { type, payload }) => {
  switch (type) {
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

    default:
      return state;
  }
}

export default reducer;