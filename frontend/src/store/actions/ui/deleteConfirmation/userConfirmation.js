import { createAction } from 'redux-actions';

export const CHANGE_USER_ID = 'ui/deleteConfirmation/userConfirmation/CHANGE_USER_ID';
export const changeUserId = createAction(CHANGE_USER_ID);

export const SUBMIT_DELETE = 'ui/deleteConfirmation/userConfirmation/SUBMIT_DELETE';
export const submitDelete = createAction(SUBMIT_DELETE);

export const SET_USER_ID = 'ui/deleteConfirmation/userConfirmation/SET_USER_ID';
export const setUserId = createAction(SET_USER_ID);