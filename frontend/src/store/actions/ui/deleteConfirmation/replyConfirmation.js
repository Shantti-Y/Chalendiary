import { createAction } from 'redux-actions';

export const CHANGE_REPLY = 'ui/deleteConfirmation/replyConfirmation/CHANGE_REPLY';
export const changeReply = createAction(CHANGE_REPLY);

export const SUBMIT_DELETE = 'ui/deleteConfirmation/replyConfirmation/SUBMIT_DELETE';
export const submitDelete = createAction(SUBMIT_DELETE);

export const SET_REPLY = 'ui/deleteConfirmation/replyConfirmation/SET_REPLY';
export const setReply = createAction(SET_REPLY);