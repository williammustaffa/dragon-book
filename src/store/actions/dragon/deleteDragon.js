import types from "store/types";

export default function deleteDragon(payload) {
  return {
    type: types.DELETE_DRAGON,
    payload,
  };
};