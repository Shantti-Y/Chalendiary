import { all } from 'redux-saga/effects';

import menuBarSaga from '@store/sagas/ui/layout/menuBar';

export default function* layoutSaga() {
  yield all([
    ...menuBarSaga()
  ]);
}