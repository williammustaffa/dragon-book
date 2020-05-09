import types from "store/types";
import { push } from "connected-react-router"
import { put, call, takeLatest } from "redux-saga/effects";
import { getAPIConnector } from "store/api";

/**
 * Check if credentials match on the database and redirect
 */
export function* userLogout() {
  const connector = getAPIConnector();
  yield call(connector.userLogout);

  yield put(push("/"));
} 

/**
 * Watch USER_LOGOUT action
 */
export function* watchUserLogoutAsync() {
  yield takeLatest(types.USER_LOGOUT, userLogout);
}