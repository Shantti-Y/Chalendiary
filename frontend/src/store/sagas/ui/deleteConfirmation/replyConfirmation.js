
import { put, all, takeLatest } from 'redux-saga/effects';
import {
  CHANGE_REPLY,
  SUBMIT_DELETE,
  setReply,
} from '@store/actions/ui/deleteConfirmation/replyConfirmation';
import { closeDeleteConfirmation } from '@store/actions/ui/deleteConfirmation/base';
import { openSnackbar } from '@store/actions/ui/snackbar';
import { closeMenu } from '@store/actions/ui/submenu/popperMenu/main';
import { deleteReply } from '@store/actions/reply';

import { snackbarVariants } from '@store/reducers/ui/snackbar';

// APIs
function* invokeChangeReply(action) {
  const { reply } = action.payload;
  yield put(setReply({ reply }));
}

function* invokeSubmitDelete(action) {
  const { reply } = action.payload;
  yield put(deleteReply({ reply }));
  yield put(openSnackbar({ message: "Deleted a Reply!", variant: snackbarVariants.WARNING }));
  yield put(closeMenu());
  yield put(closeDeleteConfirmation());
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CHANGE_REPLY, invokeChangeReply);
  yield takeLatest(SUBMIT_DELETE, invokeSubmitDelete);
}

export default function* replyConfirmationSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}