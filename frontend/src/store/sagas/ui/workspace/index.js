import { all } from 'redux-saga/effects';

import diaryTableSaga from '@store/sagas/ui/workspace/diaryTable';

export default function* workspaceSaga() {
  yield all([
    ...diaryTableSaga()
  ]);
}