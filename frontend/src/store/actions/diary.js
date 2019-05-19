import { createAction } from 'redux-actions';

export const SEARCH_DIARIES = 'SEARCH_DIARIES';
export const SUCCEED_SEARCH_DIARIES = 'SUCCEED_SEARCH_DIARIES';
export const FAIL_SEARCH_DIARIES = 'FAIL_SEARCH_DIARIES';

export const searchDiaries = createAction(SEARCH_DIARIES);
export const succeedSearchDiaries = createAction(SUCCEED_SEARCH_DIARIES);
export const failSearchDiaries = createAction(FAIL_SEARCH_DIARIES);

export const CHANGE_DIARIES = 'CHANGE_DIARIES';
export const CHANGE_CURRENT_DIARY_ID = 'CHANGE_CURRENT_DIARY_ID';
export const ADD_NEW_DIARY = 'ADD_NEW_DIARY';
export const UPDATE_DIARY = 'UPDATE_DIARY';

export const changeDiaries = createAction(CHANGE_DIARIES);
export const changeCurrentDiaryId = createAction(CHANGE_CURRENT_DIARY_ID);
export const addNewDiary = createAction(ADD_NEW_DIARY);
export const updateDiary = createAction(UPDATE_DIARY);

// for calling reducers
export const SET_DIARIES = 'SET_DIARIES';
export const SET_CURRENT_DIARY_ID = 'SET_CURRENT_DIARY_ID';
export const setDiaries = createAction(SET_DIARIES);
export const setCurrentDiaryId = createAction(SET_CURRENT_DIARY_ID);