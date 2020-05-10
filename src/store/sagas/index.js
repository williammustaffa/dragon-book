import { all } from "redux-saga/effects";

// User
import { watchUserLoginAsync } from "./user/userLogin";
import { watchUserLogoutAsync } from "./user/userLogout";
import { watchUserCheckSessionAsync } from "./user/userCheckSession";
import { watchCreateProfileAsync } from "./user/createProfile";

// Dragons
import { watchFetchDragons } from "./dragons/fetchDragons";
import { watchFetchDragon } from "./dragon/fetchDragon";

/**
 * Root saga provided to redux middleware
 */
function* root() {
  const watchers = [];

  // User watchers
  watchers.push(watchUserLoginAsync());
  watchers.push(watchUserLogoutAsync());
  watchers.push(watchUserCheckSessionAsync());
  watchers.push(watchCreateProfileAsync());

  // Dragons watchers
  watchers.push(watchFetchDragon());
  watchers.push(watchFetchDragons());

  yield all(watchers);
}

export default root;