
import { put, all, takeLatest } from 'redux-saga/effects';
import {
  CHANGE_REPLY,
  setReply,
} from '@store/actions/ui/submenu/popperMenu/replyMenu';

// APIs
function* invokeChangeReply(action) {
  const { reply } = action.payload;
  yield put(setReply({ reply }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CHANGE_REPLY, invokeChangeReply);
}

export default function* replyMenuSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}