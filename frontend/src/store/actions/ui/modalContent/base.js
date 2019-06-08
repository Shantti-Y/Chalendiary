import { createAction } from 'redux-actions';

export const CLOSE_MODAL_CONTENT = 'ui/modalContent/base/CLOSE_MODAL_CONTENT';
export const closeModalContent = createAction(CLOSE_MODAL_CONTENT);

export const SET_DIARY_FORM_CONTENT = 'ui/modalContent/base/SET_DIARY_FORM_CONTENT';
export const setDiaryFormContent = createAction(SET_DIARY_FORM_CONTENT);

export const SET_REPLY_FORM_CONTENT = 'ui/modalContent/base/SET_REPLY_FORM_CONTENT';
export const setReplyFormContent = createAction(SET_REPLY_FORM_CONTENT);

export const SET_TAG_FORM_CONTENT = 'ui/modalContent/base/SET_TAG_FORM_CONTENT';
export const setTagFormContent = createAction(SET_TAG_FORM_CONTENT);

export const SET_USER_FORM_CONTENT = 'ui/modalContent/base/SET_USER_FORM_CONTENT';
export const setUserFormContent = createAction(SET_USER_FORM_CONTENT);

export const SET_MODAL_CONTENT_NAME = 'ui/modalContent/base/SET_MODAL_CONTENT_NAME';
export const setModalContentName = createAction(SET_MODAL_CONTENT_NAME);