
import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  SET_DIARY_DETAIL_COMPONENT,
  setCurrentComponentName,
} from '@store/actions/ui/submenu/main';
import { changeCurrentDiaryId } from '@store/actions/diary';

// APIs
function* invokeSetCurrentComponentName(action) {
  const { diary } = action.payload;
  yield put(changeCurrentDiaryId({ diaryId: diary.id }));
  yield put(setCurrentComponentName({ currentComponentName: 'diaryDetail' }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(SET_DIARY_DETAIL_COMPONENT, invokeSetCurrentComponentName);
}

export default function* mainSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}