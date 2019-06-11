import { createAction } from 'redux-actions';

export const CHANGE_REPLY = 'ui/submenu/popperMenu/replyMenu/CHANGE_REPLY';
export const changeReply = createAction(CHANGE_REPLY);

export const SET_REPLY = 'ui/submenu/popperMenu/replyMenu/SET_REPLY';
export const setReply = createAction(SET_REPLY);