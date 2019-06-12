import { all } from 'redux-saga/effects';

import deleteConfirmationBaseSaga from '@store/sagas/ui/deleteConfirmation/base';
import deleteConfirmationDiaryConfirmationSaga from '@store/sagas/ui/deleteConfirmation/diaryConfirmation';
import deleteConfirmationReplyConfirmationSaga from '@store/sagas/ui/deleteConfirmation/replyConfirmation';

export default function* modalContentSaga() {
  yield all([
    ...deleteConfirmationBaseSaga(),
    ...deleteConfirmationDiaryConfirmationSaga(),
    ...deleteConfirmationReplyConfirmationSaga()
  ]);
}