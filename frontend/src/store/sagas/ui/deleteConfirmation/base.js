import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  CLOSE_DELETE_CONFIRMATION,
  SET_DIARY_CONFIRMATION,
  SET_REPLY_CONFIRMATION,
  SET_USER_CONFIRMATION,
  setCurrentComponentName
} from '@store/actions/ui/deleteConfirmation/base';

import { deleteConfirmations } from '@store/reducers/ui/deleteConfirmation/base';
import { changeDiary } from '@store/actions/ui/deleteConfirmation/diaryConfirmation';
import { changeReply } from '@store/actions/ui/deleteConfirmation/replyConfirmation';
import { changeUserId } from '@store/actions/ui/deleteConfirmation/userConfirmation';

// APIs
function* invokeCloseDeleteConfirmation() {
  yield put(setCurrentComponentName({ currentContentName: null }));
}

function* invokeSetDiaryConfirmation(action) {
  const { diary } = action.payload;
  yield put(changeDiary({ diary }));
  yield put(setCurrentComponentName({ currentContentName: deleteConfirmations.DIARY_CONFIRMATION }));
}

function* invokeSetReplyConfirmation(action) {
  const { reply } = action.payload;
  yield put(changeReply({ reply }));
  yield put(setCurrentComponentName({ currentContentName: deleteConfirmations.REPLY_CONFIRMATION }));
}

function* invokeSetUserConfirmation(action) {
  const { userId } = action.payload;
  yield put(changeUserId({ userId }));
  yield put(setCurrentComponentName({ currentContentName: deleteConfirmations.USER_CONFIRMATION }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CLOSE_DELETE_CONFIRMATION, invokeCloseDeleteConfirmation);
  yield takeLatest(SET_DIARY_CONFIRMATION, invokeSetDiaryConfirmation);
  yield takeLatest(SET_REPLY_CONFIRMATION, invokeSetReplyConfirmation);
  yield takeLatest(SET_USER_CONFIRMATION, invokeSetUserConfirmation);
}

export default function* baseSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}