import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/layout/menuBar';

const initialState = {
  opened: false
};

const functions = {
  setOpened: (state, payload) => {
    return {
      ...state,
      opened: payload.opened
    }
  }
}

export default handleActions({
  [actions.SET_OPENED]: (state, action) => functions.setOpened(state, action.payload)
}, initialState);