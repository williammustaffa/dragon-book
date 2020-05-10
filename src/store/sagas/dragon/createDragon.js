import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import { getAPIConnector } from "store/api";
import { createDragonSuccess, createDragonFailure } from "store/actions";

/**
 * Call create dragon api
 */
function* createDragon({ payload }) {
  try {
    const connector = getAPIConnector();
    const result = yield call(connector.createDragon, payload);

    yield put(createDragonSuccess(result));
    yield put(push(`/dragon/${result.id}`));
  } catch (e) {
    yield put(createDragonFailure(e));
  }
} 

/**
 * Watch CREATE_DRAGON action
 */
export function* watchCreateDragon() {
  yield takeLatest(types.CREATE_DRAGON, createDragon);
}