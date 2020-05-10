import types from "store/types";

export default function fetchDragonSuccess(payload) {
  return {
    type: types.FETCH_DRAGON_SUCCESS,
    payload,
  };
};