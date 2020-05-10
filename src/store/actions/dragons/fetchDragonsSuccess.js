import types from "store/types";

export default function fetchDragonsSuccess(payload) {
  return {
    type: types.FETCH_DRAGONS_SUCCESS,
    payload,
  };
};