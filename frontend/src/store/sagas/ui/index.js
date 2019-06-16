import { all } from 'redux-saga/effects';

import uiLayoutSaga from '@store/sagas/ui/layout';
import workspaceSaga from '@store/sagas/ui/workspace';

import uiDeleteConfirmationSaga from '@store/sagas/ui/deleteConfirmation';
import uiModalContentSaga from '@store/sagas/ui/modalContent';
import uiHeaderNavSaga from '@store/sagas/ui/headerNav';

import uiSnackbarSaga from '@store/sagas/ui/snackbar';
import popperMenuSaga from '@store/sagas/ui/popperMenu';
import uiSubmenuSaga from '@store/sagas/ui/submenu';

export default function* uiSaga(){
  yield all([
    ...workspaceSaga(),
    ...uiLayoutSaga(),
    ...uiDeleteConfirmationSaga(),
    ...uiHeaderNavSaga(),
    ...uiModalContentSaga(),
    ...uiSnackbarSaga(),
    ...uiSubmenuSaga(),
    ...popperMenuSaga()
  ]);
}