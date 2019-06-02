
import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  SET_DIARY_DETAIL_COMPONENT,
  setCurrentComponentName,
} from '@store/actions/ui/submenu';
import {
  changeCurrentDiaryId
} from '@store/actions/diary';

// APIs
function* invokeSetCurrentComponentName(action) {
  const { diaryId } = action.payload;
  yield put(changeCurrentDiaryId({ diaryId }));
  yield put(setCurrentComponentName({ currentComponentName: 'diaryDetail' }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(SET_DIARY_DETAIL_COMPONENT, invokeSetCurrentComponentName);
}

export default function* submenuSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}