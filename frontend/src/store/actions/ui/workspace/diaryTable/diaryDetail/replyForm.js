import { createAction } from 'redux-actions';

export const INITIALIZE_INPUT_ATTRIBUTES = 'ui/workspace/diaryTable/diaryDetail/replyForm/INITIALIZE_INPUT_ATTRIBUTES';
export const initializeInputAttributes = createAction(INITIALIZE_INPUT_ATTRIBUTES);

export const CHANGE_INPUT_ATTRIBUTES = 'ui/workspace/diaryTable/diaryDetail/replyForm/CHANGE_INPUT_ATTRIBUTES';
export const changeInputAttributes = createAction(CHANGE_INPUT_ATTRIBUTES);

export const SUBMIT_INPUT = 'ui/workspace/diaryTable/diaryDetail/replyForm/SUBMIT_INPUT';
export const submitInput = createAction(SUBMIT_INPUT);

export const SET_INPUT = 'ui/workspace/diaryTable/diaryDetail/replyForm/SET_INPUT';
export const setInput = createAction(SET_INPUT);