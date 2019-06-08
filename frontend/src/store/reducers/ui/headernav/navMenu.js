import React from 'react';
import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/headerNav/navMenu';

const initialState = {
  opened: false,
  anchorEl: null
};

const functions = {
  setOpened: (state, payload) => {
    return {
      ...state,
      opened: payload.opened
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
  [actions.SET_OPENED]: (state, action) => functions.setOpened(state, action.payload),
  [actions.SET_ANCHOR_EL]: (state, action) => functions.setAnchorEl(state, action.payload)
}, initialState);