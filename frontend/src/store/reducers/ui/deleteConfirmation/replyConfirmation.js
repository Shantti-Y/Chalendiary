import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/deleteConfirmation/replyConfirmation';

const initialState = {
  reply: null
};

const functions = {
  setReply: (state, payload) => {
    return {
      ...state,
      reply: payload.reply
    }
  }
}

export default handleActions({
  [actions.SET_REPLY]: (state, action) => functions.setReply(state, action.payload)
}, initialState);