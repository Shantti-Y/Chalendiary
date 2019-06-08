import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  SET_DIARY_FORM_CONTENT,
  SET_REPLY_FORM_CONTENT,
  SET_TAG_FORM_CONTENT,
  SET_USER_FORM_CONTENT,
  CLOSE_MODAL_CONTENT,
  setModalContentName
} from '@store/actions/ui/modalContent/base';
import { initializeInputAttributes as initializeDiaryAttributes } from '@store/actions/ui/modalContent/diaryForm';
import { initializeInputAttributes as initializeReplyAttributes } from '@store/actions/ui/modalContent/replyForm';
import { initializeInputAttributes as initializeTagAttributes } from '@store/actions/ui/modalContent/tagForm/main';
import { initializeInputAttributes as initializeUserAttributes } from '@store/actions/ui/modalContent/userForm/main';

// APIs
function* invokeCloseDiaryFormContent() {
  yield put(setModalContentName({ currentContentName: null }));
}

function* invokeSetReplyFormContent(action) {
  const { reply } = action.payload;
  yield put(initializeReplyAttributes({ reply }));
  yield put(setModalContentName({ currentContentName: 'replyForm' }));
}

function* invokeSetDiaryFormContent(action) {
  const { diary } = action.payload;
  yield put(initializeDiaryAttributes({ diary }));
  yield put(setModalContentName({ currentContentName: 'diaryForm' }));
}

function* invokeSetTagFormContent(action) {
  const { tag, userIds } = action.payload;
  yield put(initializeTagAttributes({ tag, userIds }));
  yield put(setModalContentName({ currentContentName: 'tagForm' }));
}

function* invokeSetUserFormContent(action) {
  const { user } = action.payload;
  yield put(initializeUserAttributes({ user }));
  yield put(setModalContentName({ currentContentName: 'userForm' }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CLOSE_MODAL_CONTENT, invokeCloseDiaryFormContent);
  yield takeLatest(SET_DIARY_FORM_CONTENT, invokeSetDiaryFormContent);
  yield takeLatest(SET_REPLY_FORM_CONTENT, invokeSetReplyFormContent);
  yield takeLatest(SET_TAG_FORM_CONTENT, invokeSetTagFormContent);
  yield takeLatest(SET_USER_FORM_CONTENT, invokeSetUserFormContent);
}

export default function* baseSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}