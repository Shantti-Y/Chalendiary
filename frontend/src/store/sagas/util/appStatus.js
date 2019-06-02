import { all, takeEvery, put } from 'redux-saga/effects';

import {
  APPLY_STATUS,
  setStatus
} from '@store/actions/util/appStatus';

function* invokeApplyStatus(action) {
  const { status } = action.payload;
  yield put(setStatus({ status }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeEvery(APPLY_STATUS, invokeApplyStatus);
}

export default function* appStatusSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}