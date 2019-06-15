import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/deleteConfirmation/base';

export const deleteConfirmations = {
  DIARY_CONFIRMATION: 'diaryConfirmation',
  REPLY_CONFIRMATION: 'replyConfirmation',
  USER_CONFIRMATION: 'userConfirmation'
}

const initialState = {
  currentContentName: null
};

const functions = {
  setCurrentContentName: (state, payload) => {
    return {
      ...state,
      currentContentName: payload.currentContentName
    }
  }
}

export default handleActions({
  [actions.SET_CURRENT_COMPONENT_NAME]: (state, action) => functions.setCurrentContentName(state, action.payload)
}, initialState);