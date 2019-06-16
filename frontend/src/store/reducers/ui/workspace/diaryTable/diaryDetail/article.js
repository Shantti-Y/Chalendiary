import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/workspace/diaryTable/diaryDetail/article';

const initialState = {
  currentDiaryId: null
};

const functions = {
  setCurrentDiaryId: (state, payload) => {
    return {
      ...state,
      currentDiaryId: payload.diaryId
    }
  }
}

export default handleActions({
  [actions.SET_CURRENT_DIARY_ID]: (state, action) => functions.setCurrentDiaryId(state, action.payload)
}, initialState);