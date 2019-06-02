import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/util/appStatus';

export const appStatuses = {
  SUCCESS: 'success',
  DANGER: 'danger'
}

const initialState = {
  status: appStatuses.SUCCESS
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