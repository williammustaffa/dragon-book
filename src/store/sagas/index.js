import { all } from "redux-saga/effects";
import { watchUserLoginAsync } from "./user/userLogin";
import { watchUserLogoutAsync } from "./user/userLogout";
import { watchUserCheckSessionAsync } from "./user/userCheckSession";
import { watchCreateProfileAsync } from "./user/createProfile";
import { watchFetchDragons } from "./dragons/fetchDragons";
import { watchFetchDragon } from "./dragon/fetchDragon";
import { watchCreateDragon } from "./dragon/createDragon";
import { watchUpdateDragon } from "./dragon/updateDragon";
import { watchDeleteDragon } from "./dragon/deleteDragon";

/**
 * Root saga provided to redux middleware
 */
function* root() {
  const watchers = [];

  // User login
  watchers.push(watchUserLoginAsync());

  // User logout
  watchers.push(watchUserLogoutAsync());

  // User check session
  watchers.push(watchUserCheckSessionAsync());

  // User create profile
  watchers.push(watchCreateProfileAsync());

  // Dragon fetch dragon list
  watchers.push(watchFetchDragons());

  // Dragons fetch dragon info
  watchers.push(watchFetchDragon());

  // Dragon create dragon
  watchers.push(watchCreateDragon());

  // Dragon update dragon
  watchers.push(watchUpdateDragon());

  // Dragon update dragon
  watchers.push(watchDeleteDragon());

  yield all(watchers);
}

export default root;