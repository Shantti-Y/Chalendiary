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
  }),
  updateDiary: (state, payload) => {
    const targetDiaryIdx = state.diaries.findIndex(diary => diary.id === payload.diary.id);
    const newDiaries = Object.assign([], state.diaries);
    newDiaries.splice(targetDiaryIdx, 1, payload.diary);
    return {
      ...state,
      currentDiary: payload.diary,
      diaries: newDiaries
    }
  }
};

export default handleActions({
  [actions.SET_DIARIES]: (state, action) => functions.setDiaries(state, action.payload),
  [actions.SET_CURRENT_DIARY_ID]: (state, action) => functions.setCurrentDiaryId(state, action.payload),
  [actions.UPDATE_DIARY]: (state, action) => functions.updateDiary(state, action.payload)
}, initialState);