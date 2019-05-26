import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/modalContent/base';

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
  [actions.SET_MODAL_CONTENT_NAME]: (state, action) => functions.setCurrentContentName(state, action.payload)
}, initialState);