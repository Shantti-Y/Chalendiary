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
  }),
  updateTag: (state, payload) => {
    const targetTagIdx = state.tags.findIndex(tag => tag.id === payload.tag.id);
    const newTags = Object.assign([], state.tags);
    newTags.splice(targetTagIdx, 1, payload.tag);
    return {
      ...state,
      tags: newTags
    }
  }
}

export default handleActions({
  [actions.SET_TAGS]: (state, action) => functions.setTags(state, action.payload),
  [actions.SET_CURRENT_TAG_ID]: (state, action) => functions.setCurrentTagId(state, action.payload),
  [actions.UPDATE_TAG]: (state, action) => functions.updateTag(state, action.payload)
}, initialState);