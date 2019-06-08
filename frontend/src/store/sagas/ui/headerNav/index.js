import { all } from 'redux-saga/effects';

import headerNavNavMenuSaga from '@store/sagas/ui/headerNav/navMenu';
import headerNavTagListSaga from '@store/sagas/ui/headerNav/tagList';

export default function* headerNavSaga() {
  yield all([
    ...headerNavNavMenuSaga(),
    ...headerNavTagListSaga()
  ]);
}