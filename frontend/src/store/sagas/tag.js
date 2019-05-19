import { put, all, takeLatest, call, select } from 'redux-saga/effects';

import httpClient from '@client/http';
import {
  FETCH_TAGS,
  CHANGE_CURRENT_TAG_ID,
  fetchTags,
  succeedFetchTags,
  failFetchTags,
  setTags,
  setCurrentTagId
} from '@store/actions/tag';

const getState = state => state.tag;

// APIs
function* invokeFetchTags(action){
  const { teamId } = action.payload;
  const { data } = yield call(httpClient.get, `/tags/${teamId}`);
  yield put(setTags(data));
}

function* invokeChangeCurrentTagId(action){
  const { tagId, teamId } = action.payload;
  const { tags } = yield select(getState);
  if(!tags.find(tag => tag.id === tagId)){
    yield put(fetchTags({ teamId }));
  }
  yield put(setCurrentTagId({ tagId }));
}

function* watchAsyncTriggers(){
  yield takeLatest(FETCH_TAGS, invokeFetchTags);
  yield takeLatest(CHANGE_CURRENT_TAG_ID, invokeChangeCurrentTagId);
}

export default function* tagSaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}