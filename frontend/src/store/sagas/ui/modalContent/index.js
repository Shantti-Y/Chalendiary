import { all } from 'redux-saga/effects';

import modalContentBaseSaga from '@store/sagas/ui/modalContent/base';
import modalContentDiaryFormSaga from '@store/sagas/ui/modalContent/diaryForm';
import modalContentReplyFormSaga from '@store/sagas/ui/modalContent/replyForm';
import modalContentTagFormSaga from '@store/sagas/ui/modalContent/tagForm';

export default function* modalContentSaga() {
  yield all([
    ...modalContentBaseSaga(),
    ...modalContentDiaryFormSaga(),
    ...modalContentReplyFormSaga(),
    ...modalContentTagFormSaga()
  ]);
}