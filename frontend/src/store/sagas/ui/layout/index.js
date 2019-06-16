import { all } from 'redux-saga/effects';

import menuBarSaga from '@store/sagas/ui/layout/menuBar';
import menuNavSaga from '@store/sagas/ui/layout/menuNav';

export default function* layoutSaga() {
  yield all([
    ...menuBarSaga(),
    ...menuNavSaga()
  ]);
}