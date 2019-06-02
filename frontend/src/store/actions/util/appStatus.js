import { createAction } from 'redux-actions';

export const APPLY_STATUS = 'util/appStatus/APPLY_STATUS';
export const applyStatus = createAction(APPLY_STATUS);

export const SET_STATUS = 'util/appStatus/SET_STATUS';
export const setStatus = createAction(SET_STATUS);
