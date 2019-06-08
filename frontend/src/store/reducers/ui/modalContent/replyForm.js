import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/modalContent/replyForm';

const initialState = {
  input: {
    id: null,
    userId: null,
    diaryId: null,
    contentText: ''
  }
};

const functions = {
  setForm: (state, payload) => {
    return {
      ...state,
      input: payload.input
    }
  }
}

export default handleActions({
  [actions.SET_INPUT]: (state, action) => functions.setForm(state, action.payload)
}, initialState);