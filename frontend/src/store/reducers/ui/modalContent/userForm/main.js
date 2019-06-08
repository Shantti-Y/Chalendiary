import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/modalContent/userForm/main';

const initialState = {
  input: {
    id: null,
    screenName: '',
    email: '',
    thumbnailPath: '',
    phone: ''
  }
};

const functions = {
  setInput: (state, payload) => {
    const newInput = Object.assign({}, state.input, payload.input);
    return {
      ...state,
      input: newInput
    }
  }
}

export default handleActions({
  [actions.SET_INPUT]: (state, action) => functions.setInput(state, action.payload)
}, initialState);