import { put, all, takeLatest, call, select } from 'redux-saga/effects';

import {
  FETCH_TAGS,
  CHANGE_CURRENT_TAG_ID,
  CHANGE_TO_DEFAULT_TAG_ID,
  RECEIVE_NEW_TAG,
  RECEIVE_EDIT_TAG,
  RECEIVE_DELETE_TAG,
  fetchTags,
  setTags,
  setCurrentTagId,
  changeToDefaultTagId,
  ADD_NEW_TAG,
  UPDATE_TAG,
  DELETE_TAG
} from '@store/actions/tag';

import { applyHttpGet } from '@store/actions/util/http';
import { client } from '@utils/client/stomp';

import { DEFAULT_TAG_NAME } from '@utils/defaultValues';

const getState = state => state.tag;

// APIs
function* invokeFetchTags() {
  const url = `/tags`;
  const options = {};
  const callback = function* (data) { yield put(setTags(data)) };
  yield put(applyHttpGet({ url, options, callback }));
}

function* invokeChangeCurrentTagId(action) {
  const { tagId } = action.payload;
  const { tags } = yield select(getState);
  if(!tags.find(tag => tag.id === tagId)){
    yield put(fetchTags());
  }
  yield put(setCurrentTagId({ tagId }));
}

function* invokeChangeToDefaultTagId(action) {
  const { tags } = yield select(getState);
  const defaultTag = tags.find(tag => tag.name === DEFAULT_TAG_NAME);
  if (!defaultTag) {
    yield put(fetchTags());
  }
  yield put(setCurrentTagId({ tagId: defaultTag.id }));
}

function* invokeAddNewTag(action) {
  const { tag, userIds } = action.payload;
  
  client().send('/portal/v1/tags/new', ...[{}, JSON.stringify({ tag, userIds })]);
}

function* invokeUpdateTag(action) {
  const { tag, userIds } = action.payload;
  client().send('/portal/v1/tags/edit', ...[{}, JSON.stringify({ tag, userIds })]);
}

function* invokeDeleteTag(action) {
  const { tagId } = action.payload;
  client().send('/portal/v1/tags/destroy', ...[{}, JSON.stringify({ id: tagId })]);
}

function* invokeReceiveNewTag(action) {
  const { data } = action.payload;

  const { tags } = yield select(getState);
  const newTags = Object.assign([], tags);
  newTags.push(data.tag);
  yield put(setTags({ tags: newTags }));
}

function* invokeReceiveEditTag(action) {
  const { data } = action.payload;

  const { tags } = yield select(getState);
  const newTags = Object.assign([], tags);

  const targetIdx = newTags.findIndex(tag => tag.id === data.tag.id);
  newTags[targetIdx] = data.tag;
  
  yield put(setTags({ tags: newTags }));
}

function* invokeReceiveDeleteTag(action) {
  const { data } = action.payload;

  const { tags, currentTagId } = yield select(getState);
  const newTags = Object.assign([], tags.filter(tag => tag.id !== data.tag.id));
  if(data.tag.id === currentTagId){
    yield put(changeToDefaultTagId())
  }
  yield put(setTags({ tags: newTags }));
}

function* watchAsyncTriggers(){
  yield takeLatest(FETCH_TAGS, invokeFetchTags);
  yield takeLatest(CHANGE_CURRENT_TAG_ID, invokeChangeCurrentTagId);
  yield takeLatest(CHANGE_TO_DEFAULT_TAG_ID, invokeChangeToDefaultTagId);
  yield takeLatest(RECEIVE_NEW_TAG, invokeReceiveNewTag);
  yield takeLatest(RECEIVE_EDIT_TAG, invokeReceiveEditTag);
  yield takeLatest(RECEIVE_DELETE_TAG, invokeReceiveDeleteTag);

  yield takeLatest(ADD_NEW_TAG, invokeAddNewTag);
  yield takeLatest(UPDATE_TAG, invokeUpdateTag);
  yield takeLatest(DELETE_TAG, invokeDeleteTag);
}

export default function* tagSaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}