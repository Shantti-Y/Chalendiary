import { createAction } from 'redux-actions';

export const CHANGE_CURRENT_DATE = 'CHANGE_CURRENT_DATE';
export const changeCurrentDate = createAction(CHANGE_CURRENT_DATE);

// for calling reducers
export const SET_CURRENT_DATE = 'SET_CURRENT_DATE';
export const setCurrentDate = createAction(SET_CURRENT_DATE);
