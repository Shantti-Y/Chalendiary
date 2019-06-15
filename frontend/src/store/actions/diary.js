import { createAction } from 'redux-actions';

export const SEARCH_DIARIES_IN_DATE = 'SEARCH_DIARIES_IN_DATE';
export const searchDiariesInDate = createAction(SEARCH_DIARIES_IN_DATE);

export const SEARCH_DIARIES_IN_MONTH = 'SEARCH_DIARIES_IN_MONTH';
export const searchDiariesInMonth = createAction(SEARCH_DIARIES_IN_MONTH);

export const CHANGE_DIARIES = 'diary/CHANGE_DIARIES';
export const changeDiaries = createAction(CHANGE_DIARIES);

export const CHANGE_CURRENT_DIARY_ID = 'diary/CHANGE_CURRENT_DIARY_ID';
export const changeCurrentDiaryId = createAction(CHANGE_CURRENT_DIARY_ID);

export const ADD_NEW_DIARY = 'diary/ADD_NEW_DIARY';
export const addNewDiary = createAction(ADD_NEW_DIARY);

export const UPDATE_DIARY = 'diary/UPDATE_DIARY';
export const updateDiary = createAction(UPDATE_DIARY);

export const DELETE_DIARY = 'diary/DELETE_DIARY';
export const deleteDiary = createAction(DELETE_DIARY);

// for handling receiving messages in websocker
export const RECEIVE_NEW_DIARY = 'diary/RECEIVE_NEW_DIARY';
export const receiveNewDiary = createAction(RECEIVE_NEW_DIARY);

export const RECEIVE_EDIT_DIARY = 'diary/RECEIVE_EDIT_DIARY';
export const receiveEditDiary = createAction(RECEIVE_EDIT_DIARY);

export const RECEIVE_DELETE_DIARY = 'diary/RECEIVE_DELETE_DIARY';
export const receiveDeleteDiary = createAction(RECEIVE_DELETE_DIARY);

// for calling reducers
export const SET_DIARIES = 'diary/SET_DIARIES';
export const setDiaries = createAction(SET_DIARIES);
export const SET_CURRENT_DIARY_ID = 'diary/SET_CURRENT_DIARY_ID';

export const setCurrentDiaryId = createAction(SET_CURRENT_DIARY_ID);