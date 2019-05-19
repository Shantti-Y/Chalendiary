import { put, all, takeLatest, call } from 'redux-saga/effects';

import httpClient from '@client/http';
import {
  FETCH_USERS,
  setUsers
} from '@store/actions/user';

// APIs
function* invokeFetchUsers(){
  const { data } = yield call(httpClient.get, `/users`)
  yield put(setUsers(data));
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