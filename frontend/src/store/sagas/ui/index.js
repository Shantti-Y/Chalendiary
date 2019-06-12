import { all } from 'redux-saga/effects';

import uiDeleteConfirmationSaga from '@store/sagas/ui/deleteConfirmation';
import uiModalContentSaga from '@store/sagas/ui/modalContent';
import uiHeaderNavSaga from '@store/sagas/ui/headerNav';

import uiSnackbarSaga from '@store/sagas/ui/snackbar';
import uiSubmenuSaga from '@store/sagas/ui/submenu';

export default function* uiSaga(){
  yield all([
    ...uiDeleteConfirmationSaga(),
    ...uiHeaderNavSaga(),
    ...uiModalContentSaga(),
    ...uiSnackbarSaga(),
    ...uiSubmenuSaga()
  ]);
}