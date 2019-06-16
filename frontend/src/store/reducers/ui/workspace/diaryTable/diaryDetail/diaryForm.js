import { handleActions } from 'redux-actions';
import moment from 'moment';

import * as actions from '@store/actions/ui/workspace/diaryTable/diaryDetail/diaryForm';

const initialState = {
  input: {
    id: null,
    userId: null,
    contentText: '',
    postedAt: moment()
  }
};

const functions = {
  setInput: (state, payload) => {
    return {
      ...state,
      input: payload.input
    }
  }
}

export default handleActions({
  [actions.SET_INPUT]: (state, action) => functions.setInput(state, action.payload)
}, initialState);