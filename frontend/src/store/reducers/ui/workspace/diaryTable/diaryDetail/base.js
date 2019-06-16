import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';

const initialState = {
  container: null,
  currentComponentName: ''
};

export const componentNames = {
  DIARY_FORM: 'diaryForm',
  REPLY_FORM: 'replyForm',
  ARTICLE: 'article'
}

const functions = {
  setContainer: (state, payload) => {
    return {
      ...state,
      container: payload.container
    }
  },
  setCurrentComponentName: (state, payload) => {
    return {
      ...state,
      currentComponentName: payload.currentComponentName
    }
  }
}

export default handleActions({
  [actions.SET_CONTAINER]: (state, action) => functions.setContainer(state, action.payload),
  [actions.SET_CURRENT_COMPONENT_NAME]: (state, action) => functions.setCurrentComponentName(state, action.payload)
}, initialState);