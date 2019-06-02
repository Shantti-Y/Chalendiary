import { put, all, takeLatest, call } from 'redux-saga/effects';

import {
  FETCH_USERS,
  setUsers
} from '@store/actions/user';

import { applyHttpGet } from '@store/actions/util/http';

// APIs
function* invokeFetchUsers(){
  const url = `/users`;
  const options = {};
  const callback = function* (data) { yield put(setUsers(data)) };
  yield put(applyHttpGet({ url, options, callback }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(FETCH_USERS, invokeFetchUsers)
}

export default function* userSaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}