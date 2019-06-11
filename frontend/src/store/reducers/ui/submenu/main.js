import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/submenu/main';

const initialState = {
  currentComponentName: ''
};

const functions = {
  setCurrentComponentName: (state, payload) => {
    return {
      ...state,
      currentComponentName: payload.currentComponentName
    }
  }
}

export default handleActions({
  [actions.SET_CURRENT_COMPONENT_NAME]: (state, action) => functions.setCurrentComponentName(state, action.payload)
}, initialState);