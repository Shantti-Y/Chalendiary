import { createAction } from 'redux-actions';

export const CLOSE_MENU = 'ui/submenu/popperMenu/main/CLOSE_MENU';
export const closeMenu = createAction(CLOSE_MENU);

export const SET_DIARY_MENU = 'ui/submenu/popperMenu/main/SET_DIARY_MENU';
export const setDiaryMenu = createAction(SET_DIARY_MENU);

export const SET_REPLY_MENU = 'ui/submenu/popperMenu/main/SET_REPLY_MENU';
export const setReplyMenu = createAction(SET_REPLY_MENU);

export const SET_CURRENT_MENU_NAME = 'ui/submenu/popperMenu/main/SET_CURRENT_MENU_NAME';
export const setCurrentMenuName = createAction(SET_CURRENT_MENU_NAME);

export const SET_ANCHOR_EL = 'ui/submenu/popperMenu/main/SET_ANCHOR_EL';
export const setAnchorEl = createAction(SET_ANCHOR_EL);