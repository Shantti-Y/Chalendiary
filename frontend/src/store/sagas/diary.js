import { put, all, takeLatest, select } from 'redux-saga/effects';

import {
  SEARCH_DIARIES_IN_DATE,
  SEARCH_DIARIES_IN_MONTH,
  CHANGE_CURRENT_DIARY_ID,
  ADD_NEW_DIARY,
  UPDATE_DIARY,
  DELETE_DIARY,
  RECEIVE_NEW_DIARY,
  RECEIVE_EDIT_DIARY,
  RECEIVE_DELETE_DIARY,
  receiveEditDiary,
  setDiaries,
  setCurrentDiaryId
} from '@store/actions/diary';

import { applyHttpGet } from '@store/actions/util/http';
import { client } from '@utils/client/stomp';

const getState = state => state.diary;

// APIs
function* invokeSearchDiariesInDate(action){
  const { date } = action.payload;
  const url = `/diaries/month`;
  const options = { params: { date: date.format('YYYY-MM-DD') } };
  const callback = function* (data) { yield put(setDiaries(data)) };
  yield put(applyHttpGet({ url, options, callback }));
}

function* invokeSearchDiariesInMonth(action){
  const { date } = action.payload;
  const url = `/diaries/month`;
  const options = { params: { date: date.format('YYYY-MM') } };
  const callback = function* (data) { yield put(setDiaries(data)) };
  yield put(applyHttpGet({ url, options, callback }));
}

function* invokeSetCurrentDiaryId(action) {
  // TODO: find the way to fetch diary with accurate condition (or create another API)
  const { diaryId } = action.payload;
  yield put(setCurrentDiaryId({ diaryId }));
}

function* invokeAddNewDiary(action) {
  const { diary } = action.payload;
  client().send('/portal/v1/diaries/new', ...[{}, JSON.stringify({ diary })]);
}

function* invokeUpdateDiary(action) {
  const { diary } = action.payload;
  client().send('/portal/v1/diaries/edit', ...[{}, JSON.stringify({ diary })]);
}

function* invokeDeleteDiary(action) {
  const { diary } = action.payload;
  client().send('/portal/v1/diaries/destroy', ...[{}, JSON.stringify({ id: diary.id })]);
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

function* invokeReceiveDeleteDiary(action) {
  const { data } = action.payload;
  yield put(receiveEditDiary({ data }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(SEARCH_DIARIES_IN_DATE, invokeSearchDiariesInDate);
  yield takeLatest(SEARCH_DIARIES_IN_MONTH, invokeSearchDiariesInMonth);
  yield takeLatest(CHANGE_CURRENT_DIARY_ID, invokeSetCurrentDiaryId);
  yield takeLatest(ADD_NEW_DIARY, invokeAddNewDiary);
  yield takeLatest(UPDATE_DIARY, invokeUpdateDiary);
  yield takeLatest(DELETE_DIARY, invokeDeleteDiary);

  yield takeLatest(RECEIVE_NEW_DIARY, invokeReceiveNewDiary);
  yield takeLatest(RECEIVE_EDIT_DIARY, invokeReceiveEditDiary);
  yield takeLatest(RECEIVE_DELETE_DIARY, invokeReceiveDeleteDiary);
}

export default function* diarySaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}