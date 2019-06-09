import { createAction } from 'redux-actions';

export const APPLY_STATUS = 'util/sessionStatus/APPLY_STATUS';
export const applyStatus = createAction(APPLY_STATUS);

export const AUTHENTICATE_SESSION = 'util/sessionStatus/AUTHENTICATE_SESSION';
export const authenticateSession = createAction(AUTHENTICATE_SESSION);

export const SET_STATUS = 'util/sessionStatus/SET_STATUS';
export const setStatus = createAction(SET_STATUS);
