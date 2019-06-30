import { createAction } from 'redux-actions';

export const OPEN_DIARY_FORM = 'ui/workspace/diaryTable/diaryDetail/base/OPEN_DIARY_FORM';
export const openDiaryForm = createAction(OPEN_DIARY_FORM);

export const OPEN_REPLY_FORM = 'ui/workspace/diaryTable/diaryDetail/base/OPEN_REPLY_FORM';
export const openReplyForm = createAction(OPEN_REPLY_FORM);

export const CLOSE_DETAIL = 'ui/workspace/diaryTable/diaryDetail/base/CLOSE_DETAIL';
export const closeDetail = createAction(CLOSE_DETAIL);

export const SET_CURRENT_COMPONENT_NAME = 'ui/workspace/diaryTable/diaryDetail/base/SET_CURRENT_COMPONENT_NAME';
export const setCurrentComponentName = createAction(SET_CURRENT_COMPONENT_NAME);

export const SET_CONTAINER = 'ui/workspace/diaryTable/diaryDetail/base/SET_CONTAINER';
export const setContainer = createAction(SET_CONTAINER);