import types from "store/types";

export default function fetchDragon(payload) {
  return {
    type: types.FETCH_DRAGON,
    payload,
  };
};