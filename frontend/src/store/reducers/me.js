import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/me';

const initialState = {
  me: {
    id: 0,
    screenName: '',
    email: '',
    thumbnailPath: '',
    phone: '',
    uniqueId: '',
    createdAt: '',
    updatedAt: '',
    tags: []
  }
}

// functions which return plain javascript object
const functions = {
  setMe: (state, payload) => ({
    ...state,
    me: payload.user
  })
};

export default handleActions({
  [actions.SET_ME]: (state, action) => functions.setMe(state, action.payload)
}, initialState);