import types from "store/types";

export default function fetchDragonFailure(payload) {
  return {
    type: types.FETCH_DRAGON_FAILURE,
    payload,
  };
};