import { put, all, takeLatest, select } from 'redux-saga/effects';
import {
  OPEN_MENU,
  CLOSE_MENU,
  setOpened,
  setAnchorEl
} from '@store/actions/ui/headerNav/navMenu';

// APIs
function* invokeOpenMenu(action) {
  const { anchorEl } = action.payload;

  yield put(setOpened({ opened: true }));
  yield put(setAnchorEl({ anchorEl }));
}

function* invokeCloseMenu(action) {
  yield put(setOpened({ opened: false }));
  yield put(setAnchorEl({ anchorEl: null }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(OPEN_MENU, invokeOpenMenu);
  yield takeLatest(CLOSE_MENU, invokeCloseMenu);
  yield put(setAnchorEl({ anchorEl: null }));
}

export default function* menuSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}