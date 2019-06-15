import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  CLOSE_MENU,
  SET_DIARY_MENU,
  SET_REPLY_MENU,
  SET_RECOVER_DIARY_MENU,
  setCurrentMenuName,
  setAnchorEl
} from '@store/actions/ui/submenu/popperMenu/main';
import { setDiary } from '@store/actions/ui/submenu/popperMenu/diaryMenu';
import { setDiary as setRecoverDiary } from '@store/actions/ui/submenu/popperMenu/recoverDiaryMenu';
import { setReply } from '@store/actions/ui/submenu/popperMenu/replyMenu';
import { popperMenus } from '@store/reducers/ui/submenu/popperMenu/main';

// APIs
function* invokeCloseMenu(action) {
  yield put(setCurrentMenuName({ currentMenuName: null }));
  yield put(setAnchorEl({ anchorEl: null }));
}

function* invokeDiaryMenu(action) {
  const { diary, anchorEl } = action.payload;
  yield put(setDiary({ diary }));
  yield put(setCurrentMenuName({ currentMenuName: popperMenus.DIARY_MENU }));
  yield put(setAnchorEl({ anchorEl: anchorEl }));
}

function* invokeReplyMenu(action) {
  const { reply, anchorEl } = action.payload;
  yield put(setReply({ reply }));
  yield put(setCurrentMenuName({ currentMenuName: popperMenus.REPLY_MENU }));
  yield put(setAnchorEl({ anchorEl: anchorEl }));
}

function* invokeSetRecoverDiaryMenu(action) {
  const { diary, anchorEl } = action.payload;
  yield put(setRecoverDiary({ diary }));
  yield put(setCurrentMenuName({ currentMenuName: popperMenus.RECOVER_DIARY_MENU }));
  yield put(setAnchorEl({ anchorEl: anchorEl }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CLOSE_MENU, invokeCloseMenu);
  yield takeLatest(SET_DIARY_MENU, invokeDiaryMenu);
  yield takeLatest(SET_REPLY_MENU, invokeReplyMenu);
  yield takeLatest(SET_RECOVER_DIARY_MENU, invokeSetRecoverDiaryMenu);
}

export default function* mainSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}