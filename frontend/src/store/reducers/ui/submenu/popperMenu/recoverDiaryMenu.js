import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/submenu/popperMenu/recoverDiaryMenu';

const initialState = {
  diary: null
};

const functions = {
  setDiary: (state, payload) => {
    return {
      ...state,
      diary: payload.diary
    }
  }
}

export default handleActions({
  [actions.SET_DIARY]: (state, action) => functions.setDiary(state, action.payload)
}, initialState);