import { combineReducers } from 'redux';

import layout from '@store/reducers/ui/layout';
import workspace from '@store/reducers/ui/workspace';

import snackbar from '@store/reducers/ui/snackbar';
import popperMenu from '@store/reducers/ui/popperMenu';
import submenu from '@store/reducers/ui/submenu';
import modalContent from '@store/reducers/ui/modalContent';
import headerNav from '@store/reducers/ui/headerNav';
import deleteConfirmation from '@store/reducers/ui/deleteConfirmation';

const reducer = combineReducers({
  layout,
  workspace,
  snackbar,
  submenu,
  modalContent,
  headerNav,
  deleteConfirmation,
  popperMenu
});

export default reducer;