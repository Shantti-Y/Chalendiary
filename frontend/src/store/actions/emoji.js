import { createAction } from 'redux-actions';

export const FETCH_EMOJIS = 'emoji/FETCH_EMOJIS';
export const fetchEmojis = createAction(FETCH_EMOJIS);

// for calling reducers
export const SET_EMOJIS = 'emoji/SET_EMOJIS';
export const setEmojis = createAction(SET_EMOJIS);