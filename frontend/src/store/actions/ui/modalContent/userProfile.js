import { createAction } from 'redux-actions';

export const CHANGE_CURRENT_USER_ID = 'ui/modalContent/userProfile/CHANGE_CURRENT_USER_ID';
export const changeCurrentUserId = createAction(CHANGE_CURRENT_USER_ID);

export const SET_CURRENT_USER_ID = 'ui/modalContent/userProfile/SET_CURRENT_USER_ID';
export const setCurrentUserId = createAction(SET_CURRENT_USER_ID);