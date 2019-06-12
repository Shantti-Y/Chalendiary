import { createAction } from 'redux-actions';

export const CHANGE_DIARY = 'ui/deleteConfirmation/diaryConfirmation/CHANGE_DIARY';
export const changeDiary = createAction(CHANGE_DIARY);

export const SUBMIT_DELETE = 'ui/deleteConfirmation/diaryConfirmation/SUBMIT_DELETE';
export const submitDelete = createAction(SUBMIT_DELETE);

export const SET_DIARY = 'ui/deleteConfirmation/diaryConfirmation/SET_DIARY';
export const setDiary = createAction(SET_DIARY);