import { handleActions } from 'redux-actions';
import moment from 'moment';

import * as actions from '@store/actions/date';

const currentDate = moment().format('YYYY/MM/DD');
const initialState = {
  currentDate: currentDate
};

const functions = {
  setCurrentDate: (state, payload) => ({
    ...state,
    currentDate: payload.date
  })
}

export default handleActions({
  [actions.SET_CURRENT_DATE]: (state, action) => functions.setCurrentDate(state, action.payload)
}, initialState);