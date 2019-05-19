import { createAction } from 'redux-actions';

export const FETCH_USERS = 'FETCH_USERS';
export const SUCCEED_FETCH_USERS = 'SUCCEED_FETCH_USERS';
export const FAIL_FETCH_USERS = 'FAIL_FETCH_USERS';

export const fetchUsers = createAction(FETCH_USERS);
export const succeedFetchUsers = createAction(SUCCEED_FETCH_USERS);
export const failFetchUsers = createAction(FAIL_FETCH_USERS);

export const CHANGE_USERS = 'CHANGE_USERS';
export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';

export const changeUsers = createAction(CHANGE_USERS);
export const changeCurrentUser = createAction(CHANGE_CURRENT_USER);

// for calling reducers
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setUsers = createAction(SET_USERS);
export const setCurrentUser = createAction(SET_CURRENT_USER);