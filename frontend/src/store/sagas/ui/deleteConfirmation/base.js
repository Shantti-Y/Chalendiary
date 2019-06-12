import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  CLOSE_DELETE_CONFIRMATION,
  SET_DIARY_CONFIRMATION,
  SET_REPLY_CONFIRMATION,
  setCurrentComponentName
} from '@store/actions/ui/deleteConfirmation/base';

import { deleteConfirmations } from '@store/reducers/ui/deleteConfirmation/base';
import { changeReply } from '@store/actions/ui/deleteConfirmation/replyConfirmation';

// APIs
function* invokeCloseDeleteConfirmation() {
  yield put(setCurrentComponentName({ currentContentName: null }));
}

function* invokeSetDiaryConfirmation(action) {
  const { diary } = action.payload;
  yield put(setCurrentComponentName({ currentContentName: deleteConfirmations.DIARY_CONFIRMATION }));
}

function* invokeSetReplyConfirmation(action) {
  const { reply } = action.payload;
  yield put(changeReply({ reply }));
  yield put(setCurrentComponentName({ currentContentName: deleteConfirmations.REPLY_CONFIRMATION }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CLOSE_DELETE_CONFIRMATION, invokeCloseDeleteConfirmation);
  yield takeLatest(SET_DIARY_CONFIRMATION, invokeSetDiaryConfirmation);
  yield takeLatest(SET_REPLY_CONFIRMATION, invokeSetReplyConfirmation);
}

export default function* baseSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}