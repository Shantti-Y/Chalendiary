import { put, all, takeLatest, call } from 'redux-saga/effects';

import httpClient from '@client/http';
import {
  FETCH_ME,
  succeedFetchMe,
  failFetchMe,
  setMe
} from '@store/actions/me';

// APIs
function* invokeFetchMe(action){
  const { data } = yield call(httpClient.get, `/me`);
  yield put(setMe(data));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(FETCH_ME, invokeFetchMe);
}

export default function* meSaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}