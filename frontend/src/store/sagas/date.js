import { put, all, takeLatest, call } from 'redux-saga/effects';

import {
  CHANGE_CURRENT_DATE,
  CHANGE_CURRENT_MONTH,
  setCurrentDate
} from '@store/actions/date';
import {
  searchDiariesInMonth
} from '@store/actions/diary';

// APIs
function* invokeChangeCurrentDate(action){
  const { date } = action.payload;
  yield put(setCurrentDate({ date }));
}

function* invokeChangeCurrentMonth(action){
  const { date } = action.payload;
  yield put(setCurrentDate({ date }));
  yield put(searchDiariesInMonth({ date }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(CHANGE_CURRENT_DATE, invokeChangeCurrentDate);
  yield takeLatest(CHANGE_CURRENT_MONTH, invokeChangeCurrentMonth);
}

export default function* diarySaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}