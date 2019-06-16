import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/popperMenu';

const initialState = {
  component: null,
  anchorEl: null
};

const functions = {
  setComponent: (state, payload) => {
    return {
      ...state,
      component: payload.component
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
  [actions.SET_COMPONENT]: (state, action) => functions.setComponent(state, action.payload),
  [actions.SET_ANCHOR_EL]: (state, action) => functions.setAnchorEl(state, action.payload)
}, initialState);