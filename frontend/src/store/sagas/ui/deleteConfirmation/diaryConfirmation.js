
import { put, all, takeLatest } from 'redux-saga/effects';
import {
  CHANGE_DIARY,
  SUBMIT_DELETE,
  setDiary,
} from '@store/actions/ui/deleteConfirmation/diaryConfirmation';

import { closeDeleteConfirmation } from '@store/actions/ui/deleteConfirmation/base';
import { openSnackbar } from '@store/actions/ui/snackbar';
import { closeMenu } from '@store/actions/ui/submenu/popperMenu/main';
import { deleteDiary } from '@store/actions/diary';

// APIs
function* invokeChangeDiary(action) {
  const { diary } = action.payload;
  yield put(setDiary({ diary }));
}

function* invokeSubmitDelete(action) {
  const { diary } = action.payload;
  yield put(deleteDiary({ diary }));
  yield put(openSnackbar({ message: "Deleted a Diary!", variant: 'warning' }));
  yield put(closeMenu());
  yield put(closeDeleteConfirmation());
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CHANGE_DIARY, invokeChangeDiary);
  yield takeLatest(SUBMIT_DELETE, invokeSubmitDelete);
}

export default function* diaryConfirmationSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}