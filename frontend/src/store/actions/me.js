import { createAction } from 'redux-actions';

export const FETCH_ME = 'me/FETCH_ME';
export const fetchMe = createAction(FETCH_ME);

export const SET_ME = 'me/SET_ME';
export const setMe = createAction(SET_ME);