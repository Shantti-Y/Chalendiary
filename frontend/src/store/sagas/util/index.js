import { all } from 'redux-saga/effects';

import utilSessionStatusSaga from '@store/sagas/util/sessionStatus';
import utilAppStatusSaga from '@store/sagas/util/appStatus';
import utilHttpSaga from '@store/sagas/util/http';

export default function* utilSaga() {
  yield all([
    ...utilSessionStatusSaga(),
    ...utilAppStatusSaga(),
    ...utilHttpSaga()
  ]);
}