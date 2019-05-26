import { createAction } from 'redux-actions';

export const FETCH_ME = 'me/FETCH_ME';
export const SUCCEED_FETCH_ME = 'me/SUCCEED_FETCH_ME';
export const FAIL_FETCH_ME = 'me/FAIL_FETCH_ME';

export const SET_ME = 'me/SET_ME';

export const fetchMe = createAction(FETCH_ME);
export const succeedFetchMe = createAction(SUCCEED_FETCH_ME);
export const failFetchMe = createAction(FAIL_FETCH_ME);

export const setMe = createAction(SET_ME);