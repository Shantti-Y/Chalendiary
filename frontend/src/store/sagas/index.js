import { all } from 'redux-saga/effects';

import uiSaga from '@store/sagas/ui';

import dateSaga from '@store/sagas/date';
import diarySaga from '@store/sagas/diary';
import meSaga from '@store/sagas/me';
import replySaga from '@store/sagas/reply';
import tagSaga from '@store/sagas/tag';
import userSaga from '@store/sagas/user';

export default function* rootSaga(){
  yield all([
    ...uiSaga(),
    ...dateSaga(),
    ...diarySaga(),
    ...meSaga(),
    ...replySaga(),
    ...tagSaga(),
    ...userSaga()
  ]);
}