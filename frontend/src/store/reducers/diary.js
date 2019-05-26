import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/diary';

const initialState = {
  currentDiaryId: 0,
  diaries: []
};

const functions = {
  setDiaries: (state, payload) => ({
    ...state,
    diaries: payload.items
  }),
  setCurrentDiaryId: (state, payload) => ({
    ...state,
    currentDiaryId: payload.diaryId
  })
};

export default handleActions({
  [actions.SET_DIARIES]: (state, action) => functions.setDiaries(state, action.payload),
  [actions.SET_CURRENT_DIARY_ID]: (state, action) => functions.setCurrentDiaryId(state, action.payload)
}, initialState);