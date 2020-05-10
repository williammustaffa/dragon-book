import types from "store/types";

export default function deleteDragonFailure(payload) {
  return {
    type: types.DELETE_DRAGON_FAILURE,
    payload,
  };
};