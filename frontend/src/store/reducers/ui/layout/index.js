import { combineReducers } from 'redux';

import menuBar from '@store/reducers/ui/layout/menuBar';

const reducer = combineReducers({
  menuBar
});

export default reducer;