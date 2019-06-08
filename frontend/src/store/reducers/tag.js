import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/tag';

// REVIEW: currentTag would be currentTagIdx that fetch specific tag from tagList
const initialState = {
  currentTagId: null,
  tags: []
};

const functions = {
  setTags: (state, payload) => ({
    ...state,
    tags: payload.tags
  }),
  setCurrentTagId: (state, payload) => ({
    ...state,
    currentTagId: payload.tagId
  })
}

export default handleActions({
  [actions.SET_TAGS]: (state, action) => functions.setTags(state, action.payload),
  [actions.SET_CURRENT_TAG_ID]: (state, action) => functions.setCurrentTagId(state, action.payload)
}, initialState);