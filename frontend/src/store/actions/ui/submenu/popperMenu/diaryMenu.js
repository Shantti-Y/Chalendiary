import { createAction } from 'redux-actions';

export const CHANGE_DIARY = 'ui/submenu/popperMenu/diaryMenu/CHANGE_DIARY';
export const changeDiary = createAction(CHANGE_DIARY);

export const SET_DIARY = 'ui/submenu/popperMenu/diaryMenu/SET_DIARY';
export const setDiary = createAction(SET_DIARY);