import { put, all, takeLatest, select } from 'redux-saga/effects';

import {
  FETCH_USERS,
  ADD_NEW_USER,
  UPDATE_USER,
  DELETE_USER,
  RECEIVE_NEW_USER,
  RECEIVE_EDIT_USER,
  RECEIVE_DELETE_USER,
  setUsers
} from '@store/actions/user';
import { searchDiariesInMonth } from '@store/actions/diary';
import { fetchTags } from '@store/actions/tag';

import { applyHttpGet } from '@store/actions/util/http';
import { client } from '@utils/client/stomp';

const getState = state => state.user;
const getDateState = state => state.date;

// APIs
function* invokeFetchUsers(){
  const url = `/users`;
  const options = {};
  const callback = function* (data) { yield put(setUsers(data)) };
  yield put(applyHttpGet({ url, options, callback }));
}

function* invokeAddNewUser(action) {
  const { user } = action.payload;
  client().send('/portal/v1/users/new', ...[{}, JSON.stringify({ user })]);
}

function* invokeUpdateUser(action) {
  const { user } = action.payload;
  client().send('/portal/v1/users/edit', ...[{}, JSON.stringify({ user })]);
}

function* invokeDeleteUser(action) {
  const { user } = action.payload;
  client().send('/portal/v1/users/destroy', ...[{}, JSON.stringify({ id: user.id })]);
}

function* invokeReceiveNewUser(action) {
  const { data } = action.payload;

  const { currentDate } = yield select(getDateState);
  yield put(searchDiariesInMonth({ date: currentDate }));
  yield put(fetchTags());

  const { users } = yield select(getState);
  const newUsers = Object.assign([], users);
  newUsers.push(data.user);
  yield put(setUsers({ users: newUsers }));
}

function* invokeReceiveEditUser(action) {
  const { data } = action.payload;

  const { currentDate } = yield select(getDateState);
  yield put(searchDiariesInMonth({ date: currentDate }));
  yield put(fetchTags());

  const { users } = yield select(getState);
  const newUsers = Object.assign([], users);
  const targetIdx = newUsers.findIndex(user => user.id === data.user.id);
  newUsers[targetIdx] = data.user;
  yield put(setUsers({ users: newUsers }));
}

function* invokeReceiveDeleteUser(action) {
  const { data } = action.payload;

  const { users } = yield select(getState);
  const newUsers = Object.assign([], users.filter(user => user.id !== data.user.id));
  yield put(setUsers({ users: newUsers }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers(){
  yield takeLatest(FETCH_USERS, invokeFetchUsers);
  yield takeLatest(ADD_NEW_USER, invokeAddNewUser);
  yield takeLatest(UPDATE_USER, invokeUpdateUser);
  yield takeLatest(DELETE_USER, invokeDeleteUser);
  yield takeLatest(RECEIVE_NEW_USER, invokeReceiveNewUser);
  yield takeLatest(RECEIVE_EDIT_USER, invokeReceiveEditUser);
  yield takeLatest(RECEIVE_DELETE_USER, invokeReceiveDeleteUser);
}

export default function* userSaga(){
  yield all([
    watchAsyncTriggers()
  ]);
}