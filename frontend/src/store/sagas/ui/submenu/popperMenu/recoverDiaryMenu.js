
import { put, all, takeLatest } from 'redux-saga/effects';
import {
  INIT_DIARY,
  RECOVER_DIARY,
  setDiary,
} from '@store/actions/ui/submenu/popperMenu/recoverDiaryMenu';
import { updateDiary } from '@store/actions/diary';
import { openSnackbar } from '@store/actions/ui/snackbar';
import { closeMenu } from '@store/actions/ui/submenu/popperMenu/main';

import { snackbarVariants } from '@store/reducers/ui/snackbar';

// APIs
function* invokeInitDiary(action) {
  const { diary } = action.payload;
  yield put(setDiary({ diary }));
}

function* invokeRecoverDiary(action) {
  const { diary } = action.payload;
  const newDiary = Object.assign({}, diary, { deletedAt: null, userId: diary.user.id });
  yield put(updateDiary({ diary: newDiary }));
  yield put(openSnackbar({ message: "Recovered a Diary!", variant: snackbarVariants.SUCCESS }));
  yield put(closeMenu());
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(INIT_DIARY, invokeInitDiary);
  yield takeLatest(RECOVER_DIARY, invokeRecoverDiary);
}

export default function* recoverDiaryMenuSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}