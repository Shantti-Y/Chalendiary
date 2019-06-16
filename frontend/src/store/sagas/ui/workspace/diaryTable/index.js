import { all } from 'redux-saga/effects';

import diaryDetailSaga from '@store/sagas/ui/workspace/diaryTable/diaryDetail';

export default function* diaryTableSaga() {
  yield all([
    ...diaryDetailSaga()
  ]);
}