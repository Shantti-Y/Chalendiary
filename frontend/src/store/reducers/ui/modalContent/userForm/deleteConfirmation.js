import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/modalContent/userForm/deleteConfirmation';

const initialState = {
  opened: false,
  user: null
};

const functions = {
  setOpened: (state, payload) => {
    return {
      ...state,
      opened: payload.opened
    }
  },
  setUser: (state, payload) => {
    return {
      ...state,
      user: payload.user
    }
  }
}

export default handleActions({
  [actions.SET_OPENED]: (state, action) => functions.setOpened(state, action.payload),
  [actions.SET_USER]: (state, action) => functions.setUser(state, action.payload)
}, initialState);