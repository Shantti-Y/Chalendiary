import { createAction } from 'redux-actions';

export const OPEN_MENU = 'ui/popperMenu/OPEN_MENU';
export const openMenu = createAction(OPEN_MENU);

export const CLOSE_MENU = 'ui/popperMenu/CLOSE_MENU';
export const closeMenu = createAction(CLOSE_MENU);

export const SET_COMPONENT = 'ui/popperMenu/SET_COMPONENT';
export const setComponent = createAction(SET_COMPONENT);

export const SET_ANCHOR_EL = 'ui/popperMenu/SET_ANCHOR_EL';
export const setAnchorEl = createAction(SET_ANCHOR_EL);