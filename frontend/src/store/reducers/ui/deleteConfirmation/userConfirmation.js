import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/deleteConfirmation/userConfirmation';

const initialState = {
  userId: null
};

const functions = {
  setUserId: (state, payload) => {
    return {
      ...state,
      userId: payload.userId
    }
  }
}

export default handleActions({
  [actions.SET_USER_ID]: (state, action) => functions.setUserId(state, action.payload)
}, initialState);