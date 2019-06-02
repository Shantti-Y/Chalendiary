import { createAction } from 'redux-actions';

export const FETCH_USERS = 'user/FETCH_USERS';
export const fetchUsers = createAction(FETCH_USERS);

export const CHANGE_USERS = 'user/CHANGE_USERS';
export const changeUsers = createAction(CHANGE_USERS);

export const CHANGE_CURRENT_USER = 'user/CHANGE_CURRENT_USER';
export const changeCurrentUser = createAction(CHANGE_CURRENT_USER);

// for calling reducers
export const SET_USERS = 'user/SET_USERS';
export const setUsers = createAction(SET_USERS);

export const SET_CURRENT_USER = 'user/SET_CURRENT_USER';
export const setCurrentUser = createAction(SET_CURRENT_USER);