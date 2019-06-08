import { all } from 'redux-saga/effects';

import tagFormMainSaga from '@store/sagas/ui/modalContent/tagForm/main';
import tagFormDeleteConfirmationSaga from '@store/sagas/ui/modalContent/tagForm/deleteConfirmation';
export default function* tagFormSaga() {
  yield all([
    ...tagFormMainSaga(),
    ...tagFormDeleteConfirmationSaga()
  ]);
}