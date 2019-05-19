import { put, all, takeLatest, call, select } from 'redux-saga/effects';

import httpClient from '@client/http';
import {
  SEARCH_DIARIES,
  CHANGE_CURRENT_DIARY_ID,
  ADD_NEW_DIARY,
  setDiaries,
  succeedSearchDiaries,
  failSearchDiaries,
  setCurrentDiaryId
} from '@store/actions/diary';

const getState = state => state.diary;

// APIs
function* invokeSearchDiaries(action){
  const { date } = action.payload;
  const { data } = yield call(httpClient.get, `/diaries/month`, { params: { date } });
  yield put(setDiaries(data));
}

function* invokeSetCurrentDiaryId(action) {
  // TODO: find the way to fetch diary with accurate condition (or create another API)
  const { diaryId } = action.payload;
  yield put(setCurrentDiaryId({ diaryId }));
}

function* invokeAddNewDiary(action) {
  const { diary } = action.payload;
  const { data } = yield call(httpClient.post, '/diaries', { diary });

  const { diaries } = yield select(getState);
  const newDiaries = Object.assign([], diaries);
  newDiaries.find(diaryData => diaryData.date === data.date).diaries.unshift(data.diary);
  yield put(setDiaries({ items: newDiaries }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(SEARCH_DIARIES, invokeSearchDiaries);
  yield takeLatest(CHANGE_CURRENT_DIARY_ID, invokeSetCurrentDiaryId);
  yield takeLatest(ADD_NEW_DIARY, invokeAddNewDiary);
}

export default function* diarySaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}