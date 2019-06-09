import { combineReducers } from 'redux';

import appStatus from '@store/reducers/util/appStatus';
import sessionStatus from '@store/reducers/util/sessionStatus';

const reducer = combineReducers({
  appStatus,
  sessionStatus
});

export default reducer