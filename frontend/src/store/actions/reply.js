import { createAction } from 'redux-actions';

export const FETCH_REPLIES = 'reply/FETCH_REPLIES';
export const SUCCEED_FETCH_REPLIES = 'reply/SUCCEED_FETCH_REPLIES';
export const FAIL_FETCH_REPLIES = 'reply/FAIL_FETCH_REPLIES';

export const fetchReplies = createAction(FETCH_REPLIES);
export const succeedFetchReplies = createAction(SUCCEED_FETCH_REPLIES);
export const failFetchReplies = createAction(FAIL_FETCH_REPLIES);

export const CHANGE_REPLIES = 'reply/CHANGE_REPLIES';
export const CHANGE_CURRENT_REPLY = 'reply/CHANGE_CURRENT_REPLY';
export const ADD_NEW_REPLY = 'reply/ADD_NEW_REPLY';
export const UPDATE_REPLY = 'reply/UPDATE_REPLY';

export const changeReplies = createAction(CHANGE_REPLIES);
export const changeCurrentReply = createAction(CHANGE_CURRENT_REPLY);
export const addNewReply = createAction(ADD_NEW_REPLY);
export const updateReply = createAction(UPDATE_REPLY);

// for handling receiving messages in websocker
export const RECEIVE_NEW_REPLY = 'reply/RECEIVE_NEW_REPLY';
export const receiveNewReply = createAction(RECEIVE_NEW_REPLY);
export const RECEIVE_EDIT_REPLY = 'reply/RECEIVE_EDIT_REPLY';
export const receiveEditReply = createAction(RECEIVE_EDIT_REPLY);

// for calling reducers
export const SET_REPLIES = 'reply/SET_REPLIES';
export const SET_CURRENT_REPLY = 'reply/SET_CURRENT_REPLY';
export const setReplies = createAction(SET_REPLIES);
export const setCurrentReply = createAction(SET_CURRENT_REPLY);