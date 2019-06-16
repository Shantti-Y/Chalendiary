import { combineReducers } from 'redux';

import diaryDetail from '@store/reducers/ui/workspace/diaryTable/diaryDetail';

const reducer = combineReducers({
  diaryDetail
});

export default reducer;