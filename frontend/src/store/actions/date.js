import { createAction } from 'redux-actions';

export const CHANGE_CURRENT_DATE = 'date/CHANGE_CURRENT_DATE';
export const changeCurrentDate = createAction(CHANGE_CURRENT_DATE);

export const CHANGE_CURRENT_MONTH = 'date/CHANGE_CURRENT_MONTH';
export const changeCurrentMonth = createAction(CHANGE_CURRENT_MONTH);

// for calling reducers
export const SET_CURRENT_DATE = 'date/SET_CURRENT_DATE';
export const setCurrentDate = createAction(SET_CURRENT_DATE);
