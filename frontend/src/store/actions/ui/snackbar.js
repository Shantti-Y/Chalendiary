import { createAction } from 'redux-actions';

export const OPEN_SNACKBAR = 'ui/snackbar/OPEN_SNACKBAR';
export const openSnackbar = createAction(OPEN_SNACKBAR);

export const CLOSE_SNACKBAR = 'ui/snackbar/CLOSE_SNACKBAR';
export const closeSnackbar = createAction(CLOSE_SNACKBAR);

export const SET_OPENED = 'ui/snackbar/SET_OPENED';
export const setOpened = createAction(SET_OPENED);

export const SET_MESSAGE = 'ui/snackbar/SET_MESSAGE';
export const setMessage = createAction(SET_MESSAGE);

export const SET_VARIANT = 'ui/snackbar/SET_VARIANT';
export const setVariant = createAction(SET_VARIANT);