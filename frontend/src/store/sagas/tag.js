import { put, all, takeLatest, call, select } from 'redux-saga/effects';

import {
  FETCH_TAGS,
  CHANGE_CURRENT_TAG_ID,
  fetchTags,
  setTags,
  setCurrentTagId
} from '@store/actions/tag';

import { applyHttpGet } from '@store/actions/util/http';

const getState = state => state.tag;

// APIs
function* invokeFetchTags(){
  const url = `/tags`;
  const options = {};
  const callback = function* (data) { yield put(setTags(data)) };
  yield put(applyHttpGet({ url, options, callback }));
}

function* invokeChangeCurrentTagId(action){
  const { tagId } = action.payload;
  const { tags } = yield select(getState);
  if(!tags.find(tag => tag.id === tagId)){
    yield put(fetchTags());
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