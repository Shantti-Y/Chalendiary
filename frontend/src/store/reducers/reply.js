import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/reply';

// REVIEW: currentReply would be currentReplyIdx that fetch a specific reply from replyList
const initialState = {
  currentReplyId: null,
  replies: []
};

const functions = {
  setReplies: (state, payload) => ({
    ...state,
    replies: payload.replies
  }),
  setCurrentReply: (state, payload) => ({
    ...state,
    currentReply: payload.reply
  }),
  addNewReply: (state, payload) => {
    const newReplies = Object.assign([], state.replies);
    newReplies.push(payload.reply);
    return {
      ...state,
      replies: newReplies
    }
  },
  updateReply: (state, payload) => {
    const targetReplyIdx = state.replies.findIndex(reply => reply.id === payload.reply.id);
    const newRepllies = Object.assign([], state.replies);
    newRepllies.splice(targetReplyIdx, 1, payload.reply);
    return {
      ...state,
      currentReply: payload.reply,
      repllies: newRepllies
    }
  }
}

export default handleActions({
  [actions.SET_REPLIES]: (state, action) => functions.setReplies(state, action.payload),
  [actions.SET_CURRENT_REPLY]: (state, action) => functions.setCurrentReply(state, action.payload),
  [actions.ADD_NEW_REPLY]: (state, action) => functions.addNewReply(state, action.payload),
  [actions.UPDATE_REPLY]: (state, action) => functions.updateReply(state, action.payload)
}, initialState);