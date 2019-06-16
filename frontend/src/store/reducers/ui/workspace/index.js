import { combineReducers } from 'redux';

import diaryTable from '@store/reducers/ui/workspace/diaryTable';

const reducer = combineReducers({
  diaryTable
});

export default reducer;