import { combineReducers } from 'redux';

import main from '@store/reducers/ui/submenu/popperMenu/main';
import diaryMenu from '@store/reducers/ui/submenu/popperMenu/diaryMenu';
import replyMenu from '@store/reducers/ui/submenu/popperMenu/replyMenu';

const reducer = combineReducers({
  main,
  diaryMenu,
  replyMenu
});

export default reducer