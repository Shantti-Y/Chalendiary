import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/modalContent/tagForm/main';

const initialState = {
  input: {
    id: null,
    name: '',
    ownerUserId: null,
    publicFlag: false
  },
  userIds: []
};

const functions = {
  setInput: (state, payload) => {
    const newInput = Object.assign({}, state.input, payload.input);
    return {
      ...state,
      input: newInput
    }
  },
  setUserIds: (state, payload) => {
    return {
      ...state,
      userIds: payload.userIds
    }
  }
}

export default handleActions({
  [actions.SET_INPUT]: (state, action) => functions.setInput(state, action.payload),
  [actions.SET_USER_IDS]: (state, action) => functions.setUserIds(state, action.payload)
}, initialState);