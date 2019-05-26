import { handleActions } from 'redux-actions';
import moment from 'moment';

import * as actions from '@store/actions/ui/modalContent/diaryForm';

const initialState = {
  id: null,
  userId: null,
  contentText: '',
  postedAt: moment()
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