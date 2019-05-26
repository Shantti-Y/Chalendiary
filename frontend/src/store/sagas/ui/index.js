import { all } from 'redux-saga/effects';

import uiModalContentSaga from '@store/sagas/ui/modalContent';

import uiSnackbarSaga from '@store/sagas/ui/snackbar';
import uiSubmenuSaga from '@store/sagas/ui/submenu';

export default function* uiSaga(){
  yield all([
    ...uiModalContentSaga(),
    ...uiSnackbarSaga(),
    ...uiSubmenuSaga()
  ]);
}