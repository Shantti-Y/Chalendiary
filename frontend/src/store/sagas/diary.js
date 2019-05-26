import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import httpClient from '@client/http';
import stompClient from '@client/stomp';

import {
  SEARCH_DIARIES_IN_DATE,
  SEARCH_DIARIES_IN_MONTH,
  CHANGE_CURRENT_DIARY_ID,
  ADD_NEW_DIARY,
  UPDATE_DIARY,
  RECEIVE_NEW_DIARY,
  RECEIVE_EDIT_DIARY,
  setDiaries,
  setCurrentDiaryId
} from '@store/actions/diary';

const getState = state => state.diary;

// APIs
function* invokeSearchDiariesInDate(action){
  const { date } = action.payload;
  const { data } = yield call(httpClient.get, `/diaries/month`, { params: { date: date.format('YYYY-MM-DD') } });
  yield put(setDiaries(data));
}

function* invokeSearchDiariesInMonth(action){
  const { date } = action.payload;
  const { data } = yield call(httpClient.get, `/diaries/month`, { params: { date: date.format('YYYY-MM') } });
  yield put(setDiaries(data));
}

function* invokeSetCurrentDiaryId(action) {
  // TODO: find the way to fetch diary with accurate condition (or create another API)
  const { diaryId } = action.payload;
  yield put(setCurrentDiaryId({ diaryId }));
}

function* invokeAddNewDiary(action) {
  const { diary } = action.payload;
  stompClient.send('/portal/v1/diaries/new', ...[{}, JSON.stringify({ diary })]);
}

function* invokeUpdateDiary(action) {
  const { diary } = action.payload;
  stompClient.send('/portal/v1/diaries/edit', ...[{}, JSON.stringify({ diary })]);
}

function* invokeReceiveNewDiary(action) {
  const { data } = action.payload;
  const { diaries } = yield select(getState);
  const newDiaries = Object.assign([], diaries);
  newDiaries.find(item => item.date === data.diary.postedAt).diaries.unshift(data.diary);
  yield put(setDiaries({ items: newDiaries }));
}

function* invokeReceiveEditDiary(action) {
  const { data } = action.payload;
  const { diaries } = yield select(getState);
  const newDiaries = Object.assign([], diaries);
  const dateIdx = newDiaries.findIndex(item => item.date === data.diary.postedAt);
  const diaryIdx = newDiaries[dateIdx].diaries.findIndex(diary => diary.id === data.diary.id);
  newDiaries[dateIdx].diaries[diaryIdx] = data.diary;
  yield put(setDiaries({ items: newDiaries }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(SEARCH_DIARIES_IN_DATE, invokeSearchDiariesInDate);
  yield takeLatest(SEARCH_DIARIES_IN_MONTH, invokeSearchDiariesInMonth);
  yield takeLatest(CHANGE_CURRENT_DIARY_ID, invokeSetCurrentDiaryId);
  yield takeLatest(ADD_NEW_DIARY, invokeAddNewDiary);
  yield takeLatest(UPDATE_DIARY, invokeUpdateDiary);

  yield takeLatest(RECEIVE_NEW_DIARY, invokeReceiveNewDiary);
  yield takeLatest(RECEIVE_EDIT_DIARY, invokeReceiveEditDiary);
}

export default function* diarySaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}