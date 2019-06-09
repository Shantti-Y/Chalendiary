import { all, takeEvery, takeLatest, put } from 'redux-saga/effects';

import {
  APPLY_STATUS,
  AUTHENTICATE_SESSION,
  setStatus
} from '@store/actions/util/sessionStatus';

import { applyHttpPost } from '@store/actions/util/http';

import { sessionStatuses } from '@store/reducers/util/sessionStatus';

function* invokeApplyStatus(action) {
  const { status } = action.payload;
  yield put(setStatus({ status }));
}

function* invokeAuthenticateSession(action) {
  const url = '/me/signin';
  const data = {};
  const callback = function* () { yield put(setStatus({ status: sessionStatuses.LOGGED_IN })) };
  yield put(applyHttpPost({ url, data, callback }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeEvery(APPLY_STATUS, invokeApplyStatus);
  yield takeLatest(AUTHENTICATE_SESSION, invokeAuthenticateSession);
}

export default function* sessionStatusSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}