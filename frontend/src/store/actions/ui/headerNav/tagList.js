import { createAction } from 'redux-actions';

export const OPEN_MENU = 'ui/headerNav/tagList/OPEN_MENU';
export const openMenu = createAction(OPEN_MENU);

export const CLOSE_MENU = 'ui/headerNav/tagList/CLOSE_MENU';
export const closeMenu = createAction(CLOSE_MENU);

export const SUBMIT_TAG_NAME = 'ui/headerNav/tagList/SUBMIT_TAG_NAME';
export const submitTagName = createAction(SUBMIT_TAG_NAME);

export const SET_OPENED = 'ui/headerNav/tagList/SET_OPENED';
export const setOpened = createAction(SET_OPENED);

export const SET_ANCHOR_EL = 'ui/headerNav/tagList/SET_ANCHOR_EL';
export const setAnchorEl = createAction(SET_ANCHOR_EL);