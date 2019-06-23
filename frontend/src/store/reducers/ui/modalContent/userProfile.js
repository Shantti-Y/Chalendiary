import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/modalContent/userProfile';

const initialState = {
  currentUserId: null
};

const functions = {
  setCurrentUserId: (state, payload) => {
    return {
      ...state,
      currentUserId: payload.userId
    }
  }
}

export default handleActions({
  [actions.SET_CURRENT_USER_ID]: (state, action) => functions.setCurrentUserId(state, action.payload)
}, initialState);