import types from "store/types";

export default function updateDragonFailure(payload) {
  return {
    type: types.UPDATE_DRAGON_FAILURE,
    payload,
  };
};