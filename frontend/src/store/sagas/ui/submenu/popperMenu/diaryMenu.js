
import { put, all, takeLatest } from 'redux-saga/effects';
import {
  CHANGE_DIARY,
  setDiary,
} from '@store/actions/ui/submenu/popperMenu/diaryMenu';

// APIs
function* invokeChangeDiary(action) {
  const { diary } = action.payload;
  yield put(setDiary({ diary }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CHANGE_DIARY, invokeChangeDiary);
}

export default function* diaryMenuSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}