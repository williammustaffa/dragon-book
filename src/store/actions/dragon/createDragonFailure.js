import types from "store/types";

export default function createDragonSuccess(payload) {
  return {
    type: types.CREATE_DRAGON_SUCCESS,
    payload,
  };
};