import { combineReducers } from 'redux';

import appStatus from '@store/reducers/util/appStatus';

const reducer = combineReducers({
  appStatus
});

export default reducer