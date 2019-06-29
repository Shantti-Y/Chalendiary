import { combineReducers } from 'redux';

import ui from '@store/reducers/ui';
import util from '@store/reducers/util';

import date from '@store/reducers/date';
import diary from '@store/reducers/diary';
import me from '@store/reducers/me';
import user from '@store/reducers/user';
import tag from '@store/reducers/tag';
import reply from '@store/reducers/reply';
import emoji from '@store/reducers/emoji';

const reducer = combineReducers({
  ui,
  util,
  date,
  diary,
  me,
  user,
  tag,
  reply,
  emoji
});

export default reducer;