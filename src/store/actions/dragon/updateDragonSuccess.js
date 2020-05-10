import types from "store/types";

export default function updateDragonSuccess(payload) {
  return {
    type: types.UPDATE_DRAGON_SUCCESS,
    payload,
  };
};