import { all } from "redux-saga/effects";
import { watchUserLoginAsync } from "./userLogin";
import { watchUserLogoutAsync } from "./userLogout";
import { watchUserCheckSessionAsync } from "./userCheckSession";
import { watchCreateProfileAsync } from "./createProfile";

/**
 * Root saga provided to redux middleware
 */
function* root() {
  const watchers = [];

  watchers.push(watchUserLoginAsync());
  watchers.push(watchUserLogoutAsync());
  watchers.push(watchUserCheckSessionAsync());
  watchers.push(watchCreateProfileAsync());

  yield all(watchers);
}

export default root;