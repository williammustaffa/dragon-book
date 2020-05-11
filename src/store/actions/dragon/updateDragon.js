import types from "store/types";

export default function updateDragon(payload) {
  return {
    type: types.UPDATE_DRAGON,
    payload,
  };
};