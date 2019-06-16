import { combineReducers } from 'redux';

import menuBar from '@store/reducers/ui/layout/menuBar';
import menuNav from '@store/reducers/ui/layout/menuNav';

const reducer = combineReducers({
  menuBar,
  menuNav
});

export default reducer;