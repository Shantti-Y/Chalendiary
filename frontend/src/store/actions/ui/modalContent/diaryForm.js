import { createAction } from 'redux-actions';

export const CHANGE_INPUT_ATTRIBUTES = 'ui/modalContent/diaryForm/CHANGE_INPUT_ATTRIBUTES';
export const changeInputAttributes = createAction(CHANGE_INPUT_ATTRIBUTES);

export const SUBMIT_INPUT = 'ui/modalContent/diaryForm/SUBMIT_INPUT';
export const submitInput = createAction(SUBMIT_INPUT);

export const SET_INPUT = 'ui/modalContent/diaryForm/SET_INPUT';
export const setInput = createAction(SET_INPUT);