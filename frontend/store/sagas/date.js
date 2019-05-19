import { put, all, takeLatest, call } from 'redux-saga/effects';

import {
  CHANGE_CURRENT_DATE,
  setCurrentDate
} from '@store/actions/date';

// APIs
function* invokeChangeCurrentDate(action){
  const { date } = action.payload;
  yield put(setCurrentDate({ date }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(CHANGE_CURRENT_DATE, invokeChangeCurrentDate);
}

export default function* diarySaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}