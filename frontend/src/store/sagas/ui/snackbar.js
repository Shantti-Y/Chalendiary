import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  setOpened,
  setMessage,
  setVariant
} from '@store/actions/ui/snackbar';

// APIs
function* invokeOpenSnackbar(action) {
  const { message, variant } = action.payload
  yield put(setVariant({ variant }));
  yield put(setMessage({ message }));
  yield put(setOpened({ opened: true }));
}

function* invokeCloseSnackbar(action) {
  yield put(setMessage({ message: '' }));
  yield put(setOpened({ opened: false }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(OPEN_SNACKBAR, invokeOpenSnackbar);
  yield takeLatest(CLOSE_SNACKBAR, invokeCloseSnackbar);
}

export default function* uiSnackbarSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}