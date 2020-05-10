import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getAPIConnector } from "store/api";
import { fetchDragonsSuccess, fetchDragonsFailure } from "store/actions";

/**
 * Get a list of dragons
 */
function* fetchDragons({ payload }) {
  try {
    const connector = getAPIConnector();
    const result = yield call(connector.listDragons, payload);

    yield put(fetchDragonsSuccess(result));
  } catch (e) {
    yield put(fetchDragonsFailure(e));
  }
} 

/**
 * Watch FETCH_DRAGONS action
 */
export function* watchFetchDragons() {
  yield takeLatest(types.FETCH_DRAGONS, fetchDragons);
}