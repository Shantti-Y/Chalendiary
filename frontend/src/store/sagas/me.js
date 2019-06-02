import { put, all, takeLatest } from 'redux-saga/effects';

import {
  FETCH_ME,
  setMe
} from '@store/actions/me';
import { applyHttpGet } from '@store/actions/util/http';

// APIs
function* invokeFetchMe(action){
  const url = '/me';
  const options = {};
  const callback = function*(data) { yield put(setMe(data)) };
  yield put(applyHttpGet({ url, options, callback }));
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