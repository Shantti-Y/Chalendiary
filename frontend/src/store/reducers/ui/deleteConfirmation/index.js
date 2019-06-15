import { combineReducers } from 'redux';

import base from '@store/reducers/ui/deleteConfirmation/base';
import diaryConfirmation from '@store/reducers/ui/deleteConfirmation/diaryConfirmation';
import replyConfirmation from '@store/reducers/ui/deleteConfirmation/replyConfirmation';
import userConfirmation from '@store/reducers/ui/deleteConfirmation/userConfirmation';

const reducer = combineReducers({
  base,
  replyConfirmation,
  diaryConfirmation,
  userConfirmation
});

export default reducer