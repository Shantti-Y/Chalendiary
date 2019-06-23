
import { put, all, takeLatest } from 'redux-saga/effects';
import {
  CHANGE_USER_ID,
  SUBMIT_DELETE,
  setUserId,
} from '@store/actions/ui/deleteConfirmation/userConfirmation';

import { closeDeleteConfirmation } from '@store/actions/ui/deleteConfirmation/base';
import { openSnackbar } from '@store/actions/ui/snackbar';
import { closeMenu } from '@store/actions/ui/submenu/popperMenu/main';
import { deleteUser } from '@store/actions/user';

import { snackbarVariants } from '@store/reducers/ui/snackbar';

// APIs
function* invokeChangeUserId(action) {
  const { userId } = action.payload;
  yield put(setUserId({ userId }));
}

function* invokeSubmitDelete(action) {
  const { user } = action.payload;
  yield put(deleteUser({ user }));
  yield put(openSnackbar({ message: "Deleted a User!", variant: snackbarVariants.WARNING }));
  yield put(closeMenu());
  yield put(closeDeleteConfirmation());
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CHANGE_USER_ID, invokeChangeUserId);
  yield takeLatest(SUBMIT_DELETE, invokeSubmitDelete);
}

export default function* userConfirmationSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}