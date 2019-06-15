import { createAction } from 'redux-actions';

export const INIT_DIARY = 'ui/submenu/popperMenu/recoverDiary/INIT_DIARY';
export const initDiary = createAction(INIT_DIARY);

export const RECOVER_DIARY = 'ui/submenu/popperMenu/recoverDiary/RECOVER_DIARY';
export const recoverDiary = createAction(RECOVER_DIARY);

export const SET_DIARY = 'ui/submenu/popperMenu/recoverDiary/SET_DIARY';
export const setDiary = createAction(SET_DIARY);