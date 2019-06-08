import { combineReducers } from 'redux';

import main from '@store/reducers/ui/modalContent/tagForm/main';
import deleteConfirmation from '@store/reducers/ui/modalContent/tagForm/deleteConfirmation';

const reducer = combineReducers({
  main,
  deleteConfirmation
});

export default reducer