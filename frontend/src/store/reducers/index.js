import { combineReducers } from 'redux';

import ui from '@store/reducers/ui';

import date from '@store/reducers/date';
import diary from '@store/reducers/diary';
import me from '@store/reducers/me';
import user from '@store/reducers/user';
import tag from '@store/reducers/tag';
import reply from '@store/reducers/reply';

const reducer = combineReducers({
  ui,
  date,
  diary,
  me,
  user,
  tag,
  reply
});

export default reducer