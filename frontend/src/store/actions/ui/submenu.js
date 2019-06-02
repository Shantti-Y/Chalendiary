import { createAction } from 'redux-actions';

export const SET_DIARY_DETAIL_COMPONENT = 'ui/submenu/SET_DIARY_DETAIL_COMPONENT';
export const setDiaryDetailComponent = createAction(SET_DIARY_DETAIL_COMPONENT);

export const SET_CURRENT_COMPONENT_NAME = 'ui/submenu/SET_CURRENT_COMPONENT_NAME';
export const setCurrentComponentName = createAction(SET_CURRENT_COMPONENT_NAME);