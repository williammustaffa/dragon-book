import types from "store/types";

export default function createDragonFailure(payload) {
  return {
    type: types.CREATE_DRAGON_FAILURE,
    payload,
  };
};