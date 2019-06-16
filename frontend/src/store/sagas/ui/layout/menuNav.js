import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  CHANGE_COMPONENT,
  setComponent
} from '@store/actions/ui/layout/menuNav';

// APIs
function* invokeChangeComponent(action) {
  const { component } = action.payload;
  yield put(setComponent({ component }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CHANGE_COMPONENT, invokeChangeComponent);
}

export default function* menuNavSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}