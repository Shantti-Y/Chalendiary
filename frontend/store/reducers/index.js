import { combineReducers } from 'redux';

import date from '@store/reducers/date';
import diary from '@store/reducers/diary';
import me from '@store/reducers/me';
import team from '@store/reducers/team';
import user from '@store/reducers/user';
import tag from '@store/reducers/tag';
import reply from '@store/reducers/reply';
import newPostForm from '@store/reducers/newPostForm';

const reducer = combineReducers({
  date,
  diary,
  me,
  team,
  user,
  tag,
  reply,
  newPostForm
});

export default reducer