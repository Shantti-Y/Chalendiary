import { put, all, takeLatest, select } from 'redux-saga/effects';
import {
  OPEN_MENU,
  CLOSE_MENU,
  setComponent,
  setAnchorEl
} from '@store/actions/ui/popperMenu';

// APIs
function* invokeOpenMenu(action) {
  const { component, anchorEl } = action.payload;
  yield put(setComponent({ component }));
  yield put(setAnchorEl({ anchorEl }));
}
function* invokeCloseMenu(action) {
  yield put(setComponent({ component: null }));
  yield put(setAnchorEl({ anchorEl: null }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(OPEN_MENU, invokeOpenMenu);
  yield takeLatest(CLOSE_MENU, invokeCloseMenu);
}

export default function* popperMenuSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}