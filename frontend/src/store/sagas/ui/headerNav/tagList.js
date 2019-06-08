import { put, all, takeLatest } from 'redux-saga/effects';
import {
  OPEN_MENU,
  CLOSE_MENU,
  SUBMIT_TAG_NAME,
  setOpened,
  setAnchorEl
} from '@store/actions/ui/headerNav/tagList';
import { changeCurrentTagId } from '@store/actions/tag';

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

function* invokeSubmitTagName(action) {
  const { tagId } = action.payload;

  yield put(changeCurrentTagId({ tagId }));
  yield put(setOpened({ opened: false }));
  yield put(setAnchorEl({ anchorEl: null }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(OPEN_MENU, invokeOpenMenu);
  yield takeLatest(CLOSE_MENU, invokeCloseMenu);
  yield takeLatest(SUBMIT_TAG_NAME, invokeSubmitTagName);
}

export default function* tagNameSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}