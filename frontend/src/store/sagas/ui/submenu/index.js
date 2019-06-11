import { all } from 'redux-saga/effects';

import submenuMainSaga from '@store/sagas/ui/submenu/main';
import submenuPopperMenuSaga from '@store/sagas/ui/submenu/popperMenu';

export default function* submenuSaga() {
  yield all([
    ...submenuMainSaga(),
    ...submenuPopperMenuSaga()
  ]);
}