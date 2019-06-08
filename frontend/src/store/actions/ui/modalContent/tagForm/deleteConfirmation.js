import { createAction } from 'redux-actions';

export const OPEN_DELETE_CONFIRMATION = 'ui/modalContent/tagForm/deleteConfirmation/OPEN_DELETE_CONFIRMATION';
export const openDeleteconfirmation = createAction(OPEN_DELETE_CONFIRMATION);

export const CLOSE_DELETE_CONFIRMATION = 'ui/modalContent/tagForm/deleteConfirmation/CLOSE_DELETE_CONFIRMATION';
export const closeDeleteconfirmation = createAction(CLOSE_DELETE_CONFIRMATION);

export const SUBMIT_DELETE = 'ui/modalContent/tagForm/deleteConfirmation/SUBMIT_DELETE';
export const submitDelete = createAction(SUBMIT_DELETE);

export const SET_OPENED = 'ui/modalContent/tagForm/deleteConfirmation/SET_OPENED';
export const setOpened = createAction(SET_OPENED);

export const SET_TAG = 'ui/modalContent/tagForm/deleteConfirmation/SET_TAG';
export const setTag = createAction(SET_TAG);