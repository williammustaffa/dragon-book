import types from "store/types";

export default function createDragon(payload) {
  return {
    type: types.CREATE_DRAGON,
    payload,
  };
};