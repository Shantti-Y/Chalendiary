import { combineReducers } from 'redux';

import main from '@store/reducers/ui/submenu/main';
import popperMenu from '@store/reducers/ui/submenu/popperMenu';

const reducer = combineReducers({
  main,
  popperMenu
});

export default reducer;