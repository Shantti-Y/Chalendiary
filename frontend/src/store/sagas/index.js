import { all } from 'redux-saga/effects';

import utilSaga from '@store/sagas/util';
import uiSaga from '@store/sagas/ui';

import dateSaga from '@store/sagas/date';
import diarySaga from '@store/sagas/diary';
import meSaga from '@store/sagas/me';
import replySaga from '@store/sagas/reply';
import tagSaga from '@store/sagas/tag';
import userSaga from '@store/sagas/user';
import emojiSaga from '@store/sagas/emoji';

export default function* rootSaga(){
  yield all([
    ...utilSaga(),
    ...uiSaga(),
    ...dateSaga(),
    ...diarySaga(),
    ...meSaga(),
    ...replySaga(),
    ...tagSaga(),
    ...userSaga(),
    ...emojiSaga()
  ]);
}