import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/modalContent/tagForm/deleteConfirmation';

const initialState = {
  opened: false,
  tag: null
};

const functions = {
  setOpened: (state, payload) => {
    return {
      ...state,
      opened: payload.opened
    }
  },
  setTag: (state, payload) => {
    return {
      ...state,
      tag: payload.tag
    }
  }
}

export default handleActions({
  [actions.SET_OPENED]: (state, action) => functions.setOpened(state, action.payload),
  [actions.SET_TAG]: (state, action) => functions.setTag(state, action.payload)
}, initialState);