import { all } from 'redux-saga/effects';

import popperMenuMainSaga from '@store/sagas/ui/submenu/popperMenu/main';
import popperMenuDiaryMenuSaga from '@store/sagas/ui/submenu/popperMenu/diaryMenu';
import popperMenuReplyMenuSaga from '@store/sagas/ui/submenu/popperMenu/replyMenu';

export default function* popperMenuSaga() {
  yield all([
    ...popperMenuMainSaga(),
    ...popperMenuDiaryMenuSaga(),
    ...popperMenuReplyMenuSaga()
  ]);
}