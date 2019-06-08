import { createAction } from 'redux-actions';

export const FETCH_USERS = 'user/FETCH_USERS';
export const fetchUsers = createAction(FETCH_USERS);

export const CHANGE_USERS = 'user/CHANGE_USERS';
export const changeUsers = createAction(CHANGE_USERS);

export const CHANGE_CURRENT_USER = 'user/CHANGE_CURRENT_USER';
export const changeCurrentUser = createAction(CHANGE_CURRENT_USER);

export const ADD_NEW_USER = 'user/ADD_NEW_USER';
export const addNewUser = createAction(ADD_NEW_USER);

export const UPDATE_USER = 'user/UPDATE_USER';
export const updateUser = createAction(UPDATE_USER);

export const DELETE_USER = 'user/DELETE_USER';
export const deleteUser = createAction(DELETE_USER);

// for handling receiving messages in websocker
export const RECEIVE_NEW_USER = 'user/RECEIVE_NEW_USER';
export const receiveNewUser = createAction(RECEIVE_NEW_USER);

export const RECEIVE_EDIT_USER = 'user/RECEIVE_EDIT_USER';
export const receiveEditUser = createAction(RECEIVE_EDIT_USER);

export const RECEIVE_DELETE_USER = 'user/RECEIVE_DELETE_USER';
export const receiveDeleteUser = createAction(RECEIVE_DELETE_USER);

// for calling reducers
export const SET_USERS = 'user/SET_USERS';
export const setUsers = createAction(SET_USERS);

export const SET_CURRENT_USER = 'user/SET_CURRENT_USER';
export const setCurrentUser = createAction(SET_CURRENT_USER);