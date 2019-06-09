import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/util/sessionStatus';

export const sessionStatuses = {
  START_UP: 'startUp',
  LOGGED_IN: 'loggedIn',
  LOGGED_OUT: 'loggedOut'
}

const initialState = {
  status: sessionStatuses.START_UP
}

// functions which return plain javascript object
const functions = {
  setStatus: (state, payload) => ({
    ...state,
    status: payload.status
  })
};

export default handleActions({
  [actions.SET_STATUS]: (state, action) => functions.setStatus(state, action.payload)
}, initialState);