import { all } from 'redux-saga/effects';

import uiBaseSaga from '@store/sagas/ui/modalContent/base';
import uiDiaryFormSaga from '@store/sagas/ui/modalContent/diaryForm';
import uiReplyFormSaga from '@store/sagas/ui/modalContent/replyForm';

export default function* uiSaga() {
  yield all([
    ...uiBaseSaga(),
    ...uiDiaryFormSaga(),
    ...uiReplyFormSaga()
  ]);
}