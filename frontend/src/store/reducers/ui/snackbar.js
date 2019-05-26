import React from 'react';
import { handleActions } from 'redux-actions';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Warning from '@material-ui/icons/Warning';
import Error from '@material-ui/icons/Error';
import Info from '@material-ui/icons/Info';

import * as actions from '@store/actions/ui/snackbar';

// TODO Use Enum when TypeScript is applied
const variants = {
  success: { color: 'success', icon: <CheckCircle /> },
  warning: { color: 'warning', icon: <Warning /> },
  error: { color: 'error', icon: <Error /> },
  info: { color: 'info', icon: <Info /> }
}

const initialState = {
  icon: null,
  color: '',
  message: '',
  opened: false
};

const functions = {
  setOpened: (state, payload) => {
    return {
      ...state,
      opened: payload.opened
    }
  },
  setMessage: (state, payload) => {
    return {
      ...state,
      message: payload.message
    }
  },
  setVariant: (state, payload) => {
    return {
      ...state,
      icon: variants[payload.variant].icon,
      color: variants[payload.variant].color
    }
  }
}

export default handleActions({
  [actions.SET_OPENED]: (state, action) => functions.setOpened(state, action.payload),
  [actions.SET_MESSAGE]: (state, action) => functions.setMessage(state, action.payload),
  [actions.SET_VARIANT]: (state, action) => functions.setVariant(state, action.payload)
}, initialState);