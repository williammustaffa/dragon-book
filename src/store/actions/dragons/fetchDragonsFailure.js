import types from "store/types";

export default function fetchDragonsFailure(payload) {
  return {
    type: types.FETCH_DRAGONS_FAILURE,
    payload,
  };
};