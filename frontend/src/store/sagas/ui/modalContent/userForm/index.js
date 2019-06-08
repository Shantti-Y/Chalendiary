import { all } from 'redux-saga/effects';

import userFormMainSaga from '@store/sagas/ui/modalContent/userForm/main';

export default function* tagFormSaga() {
  yield all([
    ...userFormMainSaga()
  ]);
}