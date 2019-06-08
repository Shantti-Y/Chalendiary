import { combineReducers } from 'redux';

import navMenu from '@store/reducers/ui/headerNav/navMenu';
import tagList from '@store/reducers/ui/headerNav/tagList';

const reducer = combineReducers({
  navMenu,
  tagList
});

export default reducer;