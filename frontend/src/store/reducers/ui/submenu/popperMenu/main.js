import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/submenu/popperMenu/main';

export const popperMenus = {
  DIARY_MENU: 'diaryMenu',
  REPLY_MENU: 'replyMenu'
}

const initialState = {
  currentMenuName: null,
  anchorEl: null
};

const functions = {
  setCurrentMenuName: (state, payload) => {
    return {
      ...state,
      currentMenuName: payload.currentMenuName
    }
  },
  setAnchorEl: (state, payload) => {
    return {
      ...state,
      anchorEl: payload.anchorEl
    }
  }
}

export default handleActions({
  [actions.SET_CURRENT_MENU_NAME]: (state, action) => functions.setCurrentMenuName(state, action.payload),
  [actions.SET_ANCHOR_EL]: (state, action) => functions.setAnchorEl(state, action.payload)
}, initialState);