import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getAPIConnector } from "store/api";
import { fetchDragonSuccess, fetchDragonFailure } from "store/actions";

/**
 * Get a list of dragons
 */
function* fetchDragon({ payload }) {
  try {
    const connector = getAPIConnector();
    const result = yield call(connector.getDragon, payload);

    yield put(fetchDragonSuccess(result));
  } catch (e) {
    yield put(fetchDragonFailure(e));
  }
} 

/**
 * Watch FETCH_DRAGON action
 */
export function* watchFetchDragon() {
  yield takeLatest(types.FETCH_DRAGON, fetchDragon);
}