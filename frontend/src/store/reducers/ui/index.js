import { combineReducers } from 'redux';

import snackbar from '@store/reducers/ui/snackbar';
import submenu from '@store/reducers/ui/submenu';
import modalContent from '@store/reducers/ui/modalContent';

const reducer = combineReducers({
  snackbar,
  submenu,
  modalContent
});

export default reducer