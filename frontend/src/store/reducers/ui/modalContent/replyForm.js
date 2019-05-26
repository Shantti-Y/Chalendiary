import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/modalContent/replyForm';

const initialState = {
  id: null,
  userId: null,
  diaryId: null,
  contentText: ''
};

const functions = {
  setForm: (state, payload) => {
    const newInput = Object.assign({}, state.input, payload);
    return {
      ...state,
      ...newInput
    }
  }
}

export default handleActions({
  [actions.SET_INPUT]: (state, action) => functions.setForm(state, action.payload)
}, initialState);