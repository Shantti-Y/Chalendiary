import { combineReducers } from 'redux';

import snackbar from '@store/reducers/ui/snackbar';
import submenu from '@store/reducers/ui/submenu';
import modalContent from '@store/reducers/ui/modalContent';
import headerNav from '@store/reducers/ui/headerNav';
import deleteConfirmation from '@store/reducers/ui/deleteConfirmation';

const reducer = combineReducers({
  snackbar,
  submenu,
  modalContent,
  headerNav,
  deleteConfirmation
});

export default reducer;