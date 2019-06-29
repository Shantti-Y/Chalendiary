import { put, all, takeLatest, select } from 'redux-saga/effects';

import {
  FETCH_EMOJIS,
  setEmojis
} from '@store/actions/emoji';

import { applyHttpGet } from '@store/actions/util/http';

const getState = state => state.diary;

// APIs
function* invokeFetchEmojis(action) {
  const url = `/emojis`;
  const callback = function* (data) { yield put(setEmojis(data)) };
  yield put(applyHttpGet({ url, options: {}, callback }));
}


// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(FETCH_EMOJIS, invokeFetchEmojis);
}

export default function* emojiSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}