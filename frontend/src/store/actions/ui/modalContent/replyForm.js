import { createAction } from 'redux-actions';

export const INITIALIZE_INPUT_ATTRIBUTES = 'ui/modalContent/replyForm/INITIALIZE_INPUT_ATTRIBUTES';
export const initializeInputAttributes = createAction(INITIALIZE_INPUT_ATTRIBUTES);

export const CHANGE_INPUT_ATTRIBUTES = 'ui/modalContent/replyForm/CHANGE_INPUT_ATTRIBUTES';
export const changeInputAttributes = createAction(CHANGE_INPUT_ATTRIBUTES);

export const SUBMIT_INPUT = 'ui/modalContent/replyForm/SUBMIT_INPUT';
export const submitInput = createAction(SUBMIT_INPUT);

export const SET_INPUT = 'ui/modalContent/replyForm/SET_INPUT';
export const setInput = createAction(SET_INPUT);