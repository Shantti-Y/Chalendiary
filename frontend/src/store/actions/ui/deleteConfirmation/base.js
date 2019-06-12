import { createAction } from 'redux-actions';

export const CLOSE_DELETE_CONFIRMATION = 'ui/deleteConfirmation/base/CLOSE_DELETE_CONFIRMATION';
export const closeDeleteConfirmation = createAction(CLOSE_DELETE_CONFIRMATION);

export const SET_DIARY_CONFIRMATION = 'ui/deleteConfirmation/base/SET_DIARY_CONFIRMATION';
export const setDiaryConfirmation = createAction(SET_DIARY_CONFIRMATION);

export const SET_REPLY_CONFIRMATION = 'ui/deleteConfirmation/base/SET_REPLY_CONFIRMATION';
export const setReplyConfirmation = createAction(SET_REPLY_CONFIRMATION);

export const SET_CURRENT_COMPONENT_NAME = 'ui/deleteConfirmation/base/SET_CURRENT_COMPONENT_NAME';
export const setCurrentComponentName = createAction(SET_CURRENT_COMPONENT_NAME);