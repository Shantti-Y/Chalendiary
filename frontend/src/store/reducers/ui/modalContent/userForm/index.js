import { combineReducers } from 'redux';

import main from '@store/reducers/ui/modalContent/userForm/main';
import deleteConfirmation from '@store/reducers/ui/modalContent/userForm/deleteConfirmation';

const reducer = combineReducers({
  main,
  deleteConfirmation
});

export default reducer