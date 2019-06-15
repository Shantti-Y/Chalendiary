import { combineReducers } from 'redux';

import layout from '@store/reducers/ui/layout';
import snackbar from '@store/reducers/ui/snackbar';
import submenu from '@store/reducers/ui/submenu';
import modalContent from '@store/reducers/ui/modalContent';
import headerNav from '@store/reducers/ui/headerNav';
import deleteConfirmation from '@store/reducers/ui/deleteConfirmation';

const reducer = combineReducers({
  layout,
  snackbar,
  submenu,
  modalContent,
  headerNav,
  deleteConfirmation
});

export default reducer;