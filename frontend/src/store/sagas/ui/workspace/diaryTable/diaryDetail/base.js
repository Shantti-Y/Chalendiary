import { put, all, takeLatest } from 'redux-saga/effects';
import {
  OPEN_DIARY_FORM,
  OPEN_REPLY_FORM,
  OPEN_ARTICLE,
  CHANGE_DIARY_FORM,
  CHANGE_REPLY_FORM,
  CHANGE_ARTICLE,
  CLOSE_DETAIL,
  setCurrentComponentName,
  setContainer,
} from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

import { initializeInputAttributes as initializeDiary } from '@store/actions/ui/workspace/diaryTable/diaryDetail/diaryForm';
import { initializeInputAttributes as initializeReply } from '@store/actions/ui/workspace/diaryTable/diaryDetail/replyForm';
import { changeDiaryId } from '@store/actions/ui/workspace/diaryTable/diaryDetail/article';

import { componentNames } from '@store/reducers/ui/workspace/diaryTable/diaryDetail/base';
// APIs
function* invokeOpenDiaryForm(action) {
  const { container, diary } = action.payload;
  const currentComponentName = componentNames.DIARY_FORM;

  yield put(initializeDiary({ diary }));
  yield put(setCurrentComponentName({ currentComponentName }));
  yield put(setContainer({ container }));
}

function* invokeOpenReplyForm(action) {
  const { container, reply } = action.payload;
  const currentComponentName = componentNames.REPLY_FORM;

  yield put(initializeReply({ reply }));
  yield put(setCurrentComponentName({ currentComponentName }));
  yield put(setContainer({ container }));
}

function* invokeOpenArticle(action) {
  const { container, diaryId } = action.payload;
  const currentComponentName = componentNames.ARTICLE;

  yield put(changeDiaryId({ diaryId }));
  yield put(setCurrentComponentName({ currentComponentName }));
  yield put(setContainer({ container }));
}

function* invokeChangeDiaryForm(action) {
  const { diary } = action.payload;
  const currentComponentName = componentNames.DIARY_FORM;

  yield put(initializeDiary({ diary }));
  yield put(setCurrentComponentName({ currentComponentName }));
}

function* invokeChangeReplyForm(action) {
  const { reply } = action.payload;
  const currentComponentName = componentNames.REPLY_FORM;

  yield put(initializeReply({ reply }));
  yield put(setCurrentComponentName({ currentComponentName }));
}

function* invokeChangeArticle(action) {
  const { diaryId } = action.payload;
  const currentComponentName = componentNames.ARTICLE;

  yield put(changeDiaryId({ diaryId }));
  yield put(setCurrentComponentName({ currentComponentName }));
}

function* invokeCloseDetail(action) {
  yield put(setContainer({ container: null }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(OPEN_DIARY_FORM, invokeOpenDiaryForm);
  yield takeLatest(OPEN_REPLY_FORM, invokeOpenReplyForm);
  yield takeLatest(OPEN_ARTICLE, invokeOpenArticle);
  yield takeLatest(CHANGE_DIARY_FORM, invokeChangeDiaryForm);
  yield takeLatest(CHANGE_REPLY_FORM, invokeChangeReplyForm);
  yield takeLatest(CHANGE_ARTICLE, invokeChangeArticle);
  yield takeLatest(CLOSE_DETAIL, invokeCloseDetail);
}

export default function* baseSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}