import { handleActions } from 'redux-actions';

import * as actions from '@store/actions/ui/layout/menuNav';

const initialState = {
  component: null
};

const functions = {
  setComponent: (state, payload) => {
    return {
      ...state,
      component: payload.component
    }
  }
}

export default handleActions({
  [actions.SET_COMPONENT]: (state, action) => functions.setComponent(state, action.payload)
}, initialState);