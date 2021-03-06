import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getAPIConnector } from "store/api";
import { deleteDragonSuccess, deleteDragonFailure } from "store/actions";
import { push } from "connected-react-router";

/**
 * Call delete dragon api
 */
function* deleteDragon({ payload }) {
  try {
    const connector = getAPIConnector();
    const result = yield call(connector.deleteDragon, payload);

    yield put(deleteDragonSuccess(result));
    yield put(push("/"));
  } catch (e) {
    yield put(deleteDragonFailure(e));
  }
} 

/**
 * Watch DELETE_DRAGON action
 */
export function* watchDeleteDragon() {
  yield takeLatest(types.DELETE_DRAGON, deleteDragon);
}