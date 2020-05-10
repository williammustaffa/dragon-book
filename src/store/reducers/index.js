import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import dragons from "./dragons";
import dragon from "./dragon";
import user from "./user";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  dragons,
  dragon,
  user,
});

export default createRootReducer;