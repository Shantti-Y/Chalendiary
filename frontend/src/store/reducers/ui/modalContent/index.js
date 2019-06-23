import { combineReducers } from 'redux';

import base from '@store/reducers/ui/modalContent/base';
import diaryForm from '@store/reducers/ui/modalContent/diaryForm';
import replyForm from '@store/reducers/ui/modalContent/replyForm';
import tagForm from '@store/reducers/ui/modalContent/tagForm';
import userForm from '@store/reducers/ui/modalContent/userForm';
import userProfile from '@store/reducers/ui/modalContent/userProfile';

const reducer = combineReducers({
  base,
  diaryForm,
  replyForm,
  tagForm,
  userForm,
  userProfile
});

export default reducer