import { combineReducers } from 'redux';

import main from '@store/reducers/ui/submenu/popperMenu/main';
import diaryMenu from '@store/reducers/ui/submenu/popperMenu/diaryMenu';
import recoverDiaryMenu from '@store/reducers/ui/submenu/popperMenu/recoverDiaryMenu';
import replyMenu from '@store/reducers/ui/submenu/popperMenu/replyMenu';

const reducer = combineReducers({
  main,
  diaryMenu,
  recoverDiaryMenu,
  replyMenu
});

export default reducer