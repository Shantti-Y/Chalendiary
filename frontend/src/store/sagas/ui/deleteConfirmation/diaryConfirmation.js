
import { put, all, takeLatest } from 'redux-saga/effects';
import {
  CHANGE_DIARY,
  SUBMIT_DELETE,
  setDiary,
} from '@store/actions/ui/deleteConfirmation/diaryConfirmation';

import { closeDetail } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';
import { closeDeleteConfirmation } from '@store/actions/ui/deleteConfirmation/base';
import { openSnackbar } from '@store/actions/ui/snackbar';
import { deleteDiary } from '@store/actions/diary';

import { snackbarVariants } from '@store/reducers/ui/snackbar';

// APIs
function* invokeChangeDiary(action) {
  const { diary } = action.payload;
  yield put(setDiary({ diary }));
}

function* invokeSubmitDelete(action) {
  const { diary } = action.payload;
  yield put(deleteDiary({ diary }));
  yield put(openSnackbar({ message: "Deleted a Diary!", variant: snackbarVariants.WARNING }));
  yield put(closeDeleteConfirmation());
  yield put(closeDetail());
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