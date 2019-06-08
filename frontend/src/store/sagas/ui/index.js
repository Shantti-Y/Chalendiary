import { all } from 'redux-saga/effects';

import uiModalContentSaga from '@store/sagas/ui/modalContent';
import uiheaderNavSaga from '@store/sagas/ui/headerNav';

import uiSnackbarSaga from '@store/sagas/ui/snackbar';
import uiSubmenuSaga from '@store/sagas/ui/submenu';

export default function* uiSaga(){
  yield all([
    ...uiheaderNavSaga(),
    ...uiModalContentSaga(),
    ...uiSnackbarSaga(),
    ...uiSubmenuSaga()
  ]);
}