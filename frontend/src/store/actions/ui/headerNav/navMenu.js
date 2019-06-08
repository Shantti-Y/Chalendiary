import { createAction } from 'redux-actions';

export const OPEN_MENU = 'ui/headerNav/navMenu/OPEN_MENU';
export const openMenu = createAction(OPEN_MENU);

export const CLOSE_MENU = 'ui/headerNav/navMenu/CLOSE_MENU';
export const closeMenu = createAction(CLOSE_MENU);

export const SET_OPENED = 'ui/headerNav/navMenu/SET_OPENED';
export const setOpened = createAction(SET_OPENED);

export const SET_ANCHOR_EL = 'ui/headerNav/navMenu/SET_ANCHOR_EL';
export const setAnchorEl = createAction(SET_ANCHOR_EL);