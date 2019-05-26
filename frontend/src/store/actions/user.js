import { createAction } from 'redux-actions';

export const FETCH_USERS = 'user/FETCH_USERS';
export const SUCCEED_FETCH_USERS = 'user/SUCCEED_FETCH_USERS';
export const FAIL_FETCH_USERS = 'user/FAIL_FETCH_USERS';

export const fetchUsers = createAction(FETCH_USERS);
export const succeedFetchUsers = createAction(SUCCEED_FETCH_USERS);
export const failFetchUsers = createAction(FAIL_FETCH_USERS);

export const CHANGE_USERS = 'user/CHANGE_USERS';
export const CHANGE_CURRENT_USER = 'user/CHANGE_CURRENT_USER';

export const changeUsers = createAction(CHANGE_USERS);
export const changeCurrentUser = createAction(CHANGE_CURRENT_USER);

// for calling reducers
export const SET_USERS = 'user/SET_USERS';
export const SET_CURRENT_USER = 'user/SET_CURRENT_USER';
export const setUsers = createAction(SET_USERS);
export const setCurrentUser = createAction(SET_CURRENT_USER);