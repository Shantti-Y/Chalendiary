import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/diary';

const initialState = {
  currentDiaryId: 0,
  diaries: [{
    id: 0,
    team: {},
    user: {},
    contentText: '',
    postedAt: '',
    createdAt: '',
    updatedAt: '',
    replies: []
  }]
};

const functions = {
  setDiaries: (state, payload) => ({
    ...state,
    diaries: payload.diaries
  }),
  setCurrentDiaryId: (state, payload) => ({
    ...state,
    currentDiaryId: payload.diaryId
  }),
  addNewDiary: (state, payload) => {
    const newDiaries = Object.assign([], state.diaries);
    newDiaries.push(payload.diary);
    return {
      ...state,
      diaries: newDiaries
    }
  },
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
  [actions.ADD_NEW_DIARY]: (state, action) => functions.addNewDiary(state, action.payload),
  [actions.UPDATE_DIARY]: (state, action) => functions.updateDiary(state, action.payload)
}, initialState);