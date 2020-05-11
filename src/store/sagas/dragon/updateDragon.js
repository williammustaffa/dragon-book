import types from "store/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { getAPIConnector } from "store/api";
import { updateDragonSuccess, updateDragonFailure } from "store/actions";
import { push } from "connected-react-router";

/**
 * Call update dragon api
 */
function* updateDragon({ payload }) {
  try {
    const connector = getAPIConnector();
    const result = yield call(connector.updateDragon, payload);

    yield put(updateDragonSuccess(result));
    yield put(push(`/dragon/${result.id}`));
  } catch (e) {
    yield put(updateDragonFailure(e));
  }
} 

/**
 * Watch UPDATE_DRAGON action
 */
export function* watchUpdateDragon() {
  yield takeLatest(types.UPDATE_DRAGON, updateDragon);
}