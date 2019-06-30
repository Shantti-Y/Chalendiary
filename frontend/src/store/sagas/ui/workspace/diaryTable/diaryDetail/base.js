import { put, all, takeLatest } from 'redux-saga/effects';
import {
  OPEN_DIARY_FORM,
  OPEN_REPLY_FORM,
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


function* invokeCloseDetail(action) {
  yield put(setContainer({ container: null }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(OPEN_DIARY_FORM, invokeOpenDiaryForm);
  yield takeLatest(OPEN_REPLY_FORM, invokeOpenReplyForm);
  yield takeLatest(CLOSE_DETAIL, invokeCloseDetail);
}

export default function* baseSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}