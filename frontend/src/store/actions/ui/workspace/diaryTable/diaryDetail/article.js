import { createAction } from 'redux-actions';

export const CHANGE_DIARY_ID = 'ui/workspace/diaryTable/diaryDetail/article/CHANGE_DIARY_ID';
export const changeDiaryId = createAction(CHANGE_DIARY_ID);

export const RECOVER_DIARY = 'ui/workspace/diaryTable/diaryDetail/article/RECOVER_DIARY';
export const recoverDiary = createAction(RECOVER_DIARY);

export const SET_CURRENT_DIARY_ID = 'ui/workspace/diaryTable/diaryDetail/article/SET_CURRENT_DIARY_ID';
export const setCurrentDiaryId = createAction(SET_CURRENT_DIARY_ID);