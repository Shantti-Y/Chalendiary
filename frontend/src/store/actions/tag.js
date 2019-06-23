import { createAction } from 'redux-actions';

export const FETCH_TAGS = 'tag/FETCH_TAGS';
export const fetchTags = createAction(FETCH_TAGS);

export const CHANGE_TAGS = 'tag/CHANGE_TAGS';
export const changeTags = createAction(CHANGE_TAGS);

export const CHANGE_CURRENT_TAG_ID = 'tag/CHANGE_CURRENT_TAG_ID';
export const changeCurrentTagId = createAction(CHANGE_CURRENT_TAG_ID);

export const ADD_NEW_TAG = 'tag/ADD_NEW_TAG';
export const addNewTag = createAction(ADD_NEW_TAG);

export const UPDATE_TAG = 'tag/UPDATE_TAG';
export const updateTag = createAction(UPDATE_TAG);

export const DELETE_TAG = 'tag/DELETE_TAG';
export const deleteTag = createAction(DELETE_TAG);

// for handling receiving messages in websocker
export const RECEIVE_NEW_TAG = 'tag/RECEIVE_NEW_TAG';
export const receiveNewTag = createAction(RECEIVE_NEW_TAG);

export const RECEIVE_EDIT_TAG = 'tag/RECEIVE_EDIT_TAG';
export const receiveEditTag = createAction(RECEIVE_EDIT_TAG);

export const RECEIVE_DELETE_TAG = 'tag/RECEIVE_DELETE_TAG';
export const receiveDeleteTag = createAction(RECEIVE_DELETE_TAG);

// for calling reducers
export const SET_TAGS = 'tag/SET_TAGS';
export const setTags = createAction(SET_TAGS);

export const SET_CURRENT_TAG_ID = 'tag/SET_CURRENT_TAG_ID';
export const setCurrentTagId = createAction(SET_CURRENT_TAG_ID);