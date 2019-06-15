import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  OPEN_MENU_BAR,
  CLOSE_MENU_BAR,
  setOpened
} from '@store/actions/ui/layout/menuBar';

// APIs
function* invokeOpenMenuBar() {
  yield put(setOpened({ opened: true }));
}

function* invokeCloseMenuBar() {
  yield put(setOpened({ opened: false }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(OPEN_MENU_BAR, invokeOpenMenuBar);
  yield takeLatest(CLOSE_MENU_BAR, invokeCloseMenuBar);
}

export default function* menuBarSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}