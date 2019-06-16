import { all } from 'redux-saga/effects';

import baseSaga from '@store/sagas/ui/workspace/diaryTable/diaryDetail/base';
import diaryFormSaga from '@store/sagas/ui/workspace/diaryTable/diaryDetail/diaryForm';
import replyFormSaga from '@store/sagas/ui/workspace/diaryTable/diaryDetail/replyForm';
import articleSaga from '@store/sagas/ui/workspace/diaryTable/diaryDetail/article';

export default function* diaryDetailSaga() {
  yield all([
    ...baseSaga(),
    ...diaryFormSaga(),
    ...articleSaga(),
    ...replyFormSaga()
  ]);
}