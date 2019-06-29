import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/emoji';

const initialState = {
  emojis: []
};

const functions = {
  setEmojis: (state, payload) => ({
    ...state,
    emojis: payload.emojis
  })
};

export default handleActions({
  [actions.SET_EMOJIS]: (state, action) => functions.setEmojis(state, action.payload)
}, initialState);