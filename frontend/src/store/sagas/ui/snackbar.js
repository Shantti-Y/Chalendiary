import { put, all, takeLatest, select } from 'redux-saga/effects';
import {
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  setOpened,
  setMessage,
  setVariant
} from '@store/actions/ui/snackbar';

import { applyStatus } from '@store/actions/util/appStatus';

import { snackbarVariants } from '@store/reducers/ui/snackbar';
import { appStatuses } from '@store/reducers/util/appStatus';

const getState = state => state.ui.snackbar;

// APIs
function* invokeOpenSnackbar(action) {
  const { message, variant } = action.payload
  yield put(setVariant({ variant }));
  yield put(setMessage({ message }));
  yield put(setOpened({ opened: true }));
}

function* invokeCloseSnackbar(action) {
  const { color } = yield select(getState);
  if (color === snackbarVariants.DANGER.color) {
    yield put(applyStatus({ status: appStatuses.DANGER }));
  }

  yield put(setMessage({ message: '' }));
  yield put(setOpened({ opened: false }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(OPEN_SNACKBAR, invokeOpenSnackbar);
  yield takeLatest(CLOSE_SNACKBAR, invokeCloseSnackbar);
}

export default function* snackbarSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}