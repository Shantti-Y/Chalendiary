import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  SET_DIARY_FORM_CONTENT,
  SET_REPLY_FORM_CONTENT,
  CLOSE_MODAL_CONTENT,
  setModalContentName
} from '@store/actions/ui/modalContent/base';
import { changeInputAttributes as changeDiaryInputAttributes } from '@store/actions/ui/modalContent/diaryForm';
import { changeInputAttributes as changeReplyInputAttributes } from '@store/actions/ui/modalContent/replyForm';

// APIs
function* invokeCloseDiaryFormContent() {
  yield put(setModalContentName({ currentContentName: null }));
}

function* invokeSetReplyFormContent(action) {
  const { reply } = action.payload;
  yield put(changeReplyInputAttributes({ ...reply }));
  yield put(setModalContentName({ currentContentName: 'replyForm' }));
}

function* invokeSetDiaryFormContent(action) {
  const { diary } = action.payload;
  yield put(changeDiaryInputAttributes({ ...diary }));
  yield put(setModalContentName({ currentContentName: 'diaryForm' }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CLOSE_MODAL_CONTENT, invokeCloseDiaryFormContent);
  yield takeLatest(SET_DIARY_FORM_CONTENT, invokeSetDiaryFormContent);
  yield takeLatest(SET_REPLY_FORM_CONTENT, invokeSetReplyFormContent);
}

export default function* baseSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}