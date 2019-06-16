import { combineReducers } from 'redux';

import base from '@store/reducers/ui/workspace/diaryTable/diaryDetail/base';
import diaryForm from '@store/reducers/ui/workspace/diaryTable/diaryDetail/diaryForm';
import replyForm from '@store/reducers/ui/workspace/diaryTable/diaryDetail/replyForm';
import article from '@store/reducers/ui/workspace/diaryTable/diaryDetail/article';

const reducer = combineReducers({
  base,
  diaryForm,
  replyForm,
  article
});

export default reducer;