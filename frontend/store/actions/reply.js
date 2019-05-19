import { createAction } from 'redux-actions';

export const FETCH_REPLIES = 'FETCH_REPLIES';
export const SUCCEED_FETCH_REPLIES = 'SUCCEED_FETCH_REPLIES';
export const FAIL_FETCH_REPLIES = 'FAIL_FETCH_REPLIES';

export const fetchReplies = createAction(FETCH_REPLIES);
export const succeedFetchReplies = createAction(SUCCEED_FETCH_REPLIES);
export const failFetchReplies = createAction(FAIL_FETCH_REPLIES);

export const CHANGE_REPLIES = 'CHANGE_REPLIES';
export const CHANGE_CURRENT_REPLY = 'CHANGE_CURRENT_REPLY';
export const ADD_NEW_REPLY = 'ADD_NEW_REPLY';
export const UPDATE_REPLY = 'UPDATE_REPLY';

export const changeReplies = createAction(CHANGE_REPLIES);
export const changeCurrentReply = createAction(CHANGE_CURRENT_REPLY);
export const addNewReply = createAction(ADD_NEW_REPLY);
export const updateReply = createAction(UPDATE_REPLY);

// for calling reducers
export const SET_REPLIES = 'SET_REPLIES';
export const SET_CURRENT_REPLY = 'SET_CURRENT_REPLY';
export const setReplies = createAction(SET_REPLIES);
export const setCurrentReply = createAction(SET_CURRENT_REPLY);