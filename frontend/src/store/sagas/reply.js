import { put, all, takeLatest, call } from 'redux-saga/effects';

import httpClient from '@client/http';
import {
  FETCH_REPLIES,
  succeedFetchReplies,
  failFetchReplies,
  setReplies
} from '@store/actions/reply';

// APIs
function* fetchReplies(action){
  const { postId } = action.payload;
  const { data } = yield call(httpClient.get, `/replies/${postId}`);
  yield put(setReplies(data));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(FETCH_REPLIES, fetchReplies);
}

export default function* replySaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}