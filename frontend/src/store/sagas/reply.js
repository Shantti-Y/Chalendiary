import { put, all, takeLatest, call } from 'redux-saga/effects';

import httpClient from '@client/http';
import stompClient from '@client/stomp';
import {
  FETCH_REPLIES,
  ADD_NEW_REPLY,
  UPDATE_REPLY,
  RECEIVE_NEW_REPLY,
  RECEIVE_EDIT_REPLY,
  setReplies
} from '@store/actions/reply';
import {
  receiveNewDiary,
  receiveEditDiary
} from '@store/actions/diary';

// APIs
function* invokeFetchReplies(action){
  const { postId } = action.payload;
  const { data } = yield call(httpClient.get, `/replies/${postId}`);
  yield put(setReplies(data));
}

function* invokeAddNewReply(action) {
  const { reply } = action.payload;
  stompClient.send('/portal/v1/replies/new', ...[{}, JSON.stringify({ reply })]);
}

function* invokeUpdateReply(action) {
  const { reply } = action.payload;
  stompClient.send('/portal/v1/replies/edit', ...[{}, JSON.stringify({ reply })]);
}

function* invokeReceiveNewReply(action) {
  const { data } = action.payload;
  yield put(receiveNewDiary({ data }));
}

function* invokeReceiveEditReply(action) {
  const { data } = action.payload;
  yield put(receiveEditDiary({ data }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(FETCH_REPLIES, invokeFetchReplies);
  yield takeLatest(ADD_NEW_REPLY, invokeAddNewReply);
  yield takeLatest(UPDATE_REPLY, invokeUpdateReply);

  yield takeLatest(RECEIVE_NEW_REPLY, invokeReceiveNewReply);
  yield takeLatest(RECEIVE_EDIT_REPLY, invokeReceiveEditReply);
}

export default function* replySaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}