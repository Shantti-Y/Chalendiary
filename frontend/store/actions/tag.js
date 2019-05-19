import { createAction } from 'redux-actions';

export const FETCH_TAGS = 'FETCH_TAGS';
export const SUCCEED_FETCH_TAGS = 'SUCCEED_FETCH_TAGS';
export const FAIL_FETCH_TAGS = 'FAIL_FETCH_TAGS';

export const fetchTags = createAction(FETCH_TAGS);
export const succeedFetchTags = createAction(SUCCEED_FETCH_TAGS);
export const failFetchTags = createAction(FAIL_FETCH_TAGS);


export const CHANGE_TAGS = 'CHANGE_TAGS';
export const CHANGE_CURRENT_TAG_ID = 'CHANGE_CURRENT_TAG_ID';
export const changeTags = createAction(CHANGE_TAGS);
export const changeCurrentTagId = createAction(CHANGE_CURRENT_TAG_ID);

// for calling reducers
export const SET_TAGS = 'SET_TAGS';
export const setTags = createAction(SET_TAGS);
export const SET_CURRENT_TAG_ID = 'SET_CURRENT_TAG_ID';
export const setCurrentTagId = createAction(SET_CURRENT_TAG_ID);


export const ADD_NEW_TAG = 'ADD_NEW_TAG';
export const UPDATE_TAG = 'UPDATE_TAG';
export const addNewTag = createAction(ADD_NEW_TAG);
export const updateTag = createAction(UPDATE_TAG);