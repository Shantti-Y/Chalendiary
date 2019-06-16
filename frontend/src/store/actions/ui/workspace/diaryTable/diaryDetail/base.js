import { createAction } from 'redux-actions';

export const OPEN_DIARY_FORM = 'ui/workspace/diaryTable/diaryDetail/base/OPEN_DIARY_FORM';
export const openDiaryForm = createAction(OPEN_DIARY_FORM);

export const OPEN_REPLY_FORM = 'ui/workspace/diaryTable/diaryDetail/base/OPEN_REPLY_FORM';
export const openReplyForm = createAction(OPEN_REPLY_FORM);

export const OPEN_ARTICLE = 'ui/workspace/diaryTable/diaryDetail/base/OPEN_ARTICLE';
export const openArticle = createAction(OPEN_ARTICLE);

export const CHANGE_DIARY_FORM = 'ui/workspace/diaryTable/diaryDetail/base/CHANGE_DIARY_FORM';
export const changeDiaryForm = createAction(CHANGE_DIARY_FORM);

export const CHANGE_REPLY_FORM = 'ui/workspace/diaryTable/diaryDetail/base/CHANGE_REPLY_FORM';
export const changeReplyForm = createAction(CHANGE_REPLY_FORM);

export const CHANGE_ARTICLE = 'ui/workspace/diaryTable/diaryDetail/base/CHANGE_ARTICLE';
export const changeArticle = createAction(CHANGE_ARTICLE);

export const CLOSE_DETAIL = 'ui/workspace/diaryTable/diaryDetail/base/CLOSE_DETAIL';
export const closeDetail = createAction(CLOSE_DETAIL);

export const SET_CURRENT_COMPONENT_NAME = 'ui/workspace/diaryTable/diaryDetail/base/SET_CURRENT_COMPONENT_NAME';
export const setCurrentComponentName = createAction(SET_CURRENT_COMPONENT_NAME);

export const SET_CONTAINER = 'ui/workspace/diaryTable/diaryDetail/base/SET_CONTAINER';
export const setContainer = createAction(SET_CONTAINER);