import types from "store/types";

export default function deleteDragonSuccess(payload) {
  return {
    type: types.DELETE_DRAGON_SUCCESS,
    payload,
  };
};