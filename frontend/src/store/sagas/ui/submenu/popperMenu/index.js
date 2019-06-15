import { all } from 'redux-saga/effects';

import popperMenuMainSaga from '@store/sagas/ui/submenu/popperMenu/main';
import popperMenuDiaryMenuSaga from '@store/sagas/ui/submenu/popperMenu/diaryMenu';
import popperMenuRecoverDiaryMenuSaga from '@store/sagas/ui/submenu/popperMenu/recoverDiaryMenu';
import popperMenuReplyMenuSaga from '@store/sagas/ui/submenu/popperMenu/replyMenu';

export default function* popperMenuSaga() {
  yield all([
    ...popperMenuMainSaga(),
    ...popperMenuDiaryMenuSaga(),
    ...popperMenuRecoverDiaryMenuSaga(),
    ...popperMenuReplyMenuSaga()
  ]);
}