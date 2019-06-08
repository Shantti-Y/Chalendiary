import { createAction } from 'redux-actions';

export const INITIALIZE_INPUT_ATTRIBUTES = 'ui/modalContent/tagForm/INITIALIZE_INPUT_ATTRIBUTES';
export const initializeInputAttributes = createAction(INITIALIZE_INPUT_ATTRIBUTES);

export const CHANGE_INPUT_ATTRIBUTES = 'ui/modalContent/tagForm/CHANGE_INPUT_ATTRIBUTES';
export const changeInputAttributes = createAction(CHANGE_INPUT_ATTRIBUTES);

export const ADD_USER_ID = 'ui/modalContent/tagForm/ADD_USER_ID';
export const addUserId = createAction(ADD_USER_ID);

export const REMOVE_USER_ID = 'ui/modalContent/tagForm/REMOVE_USER_ID';
export const removeUserId = createAction(REMOVE_USER_ID);

export const SUBMIT_INPUT = 'ui/modalContent/tagForm/SUBMIT_INPUT';
export const submitInput = createAction(SUBMIT_INPUT);

export const SUBMIT_DELETE = 'ui/modalContent/tagForm/SUBMIT_DELETE';
export const submitDelete = createAction(SUBMIT_DELETE);

export const SET_INPUT = 'ui/modalContent/tagForm/SET_INPUT';
export const setInput = createAction(SET_INPUT);

export const SET_USER_IDS = 'ui/modalContent/tagForm/SET_USER_IDS';
export const setUserIds = createAction(SET_USER_IDS);