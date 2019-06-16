import { createAction } from 'redux-actions';

export const CHANGE_COMPONENT = 'ui/layout/menuNav/CHANGE_COMPONENT';
export const changeComponent = createAction(CHANGE_COMPONENT);

export const SET_COMPONENT = 'ui/layout/menuNav/SET_COMPONENT';
export const setComponent = createAction(SET_COMPONENT);