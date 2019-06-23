import { put, all, takeLatest } from 'redux-saga/effects';
import {
  CHANGE_CURRENT_USER_ID,
  setCurrentUserId
} from '@store/actions/ui/modalContent/userProfile';

// APIs
function* invokeChangeCurrentUserId(action) {
  const { userId } = action.payload;

  yield put(setCurrentUserId({ userId }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CHANGE_CURRENT_USER_ID, invokeChangeCurrentUserId);
}

export default function* userProfileSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}