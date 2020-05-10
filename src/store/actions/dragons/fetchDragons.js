import types from "store/types";

export default function fetchDragons(payload) {
  return {
    type: types.FETCH_DRAGONS,
    payload,
  };
};