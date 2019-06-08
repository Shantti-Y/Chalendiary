import { combineReducers } from 'redux';

import base from '@store/reducers/ui/modalContent/base';
import diaryForm from '@store/reducers/ui/modalContent/diaryForm';
import replyForm from '@store/reducers/ui/modalContent/replyForm';
import tagForm from '@store/reducers/ui/modalContent/tagForm';

const reducer = combineReducers({
  base,
  diaryForm,
  replyForm,
  tagForm
});

export default reducer