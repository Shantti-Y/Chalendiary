import { createAction } from 'redux-actions';

export const OPEN_MENU_BAR = 'ui/layout/menuBar/OPEN_MENU_BAR';
export const openMenuBar = createAction(OPEN_MENU_BAR);

export const CLOSE_MENU_BAR = 'ui/layout/menuBar/CLOSE_MENU_BAR';
export const closeMenuBar = createAction(CLOSE_MENU_BAR);

export const SET_OPENED = 'ui/layout/menuBar/SET_OPENED';
export const setOpened = createAction(SET_OPENED);