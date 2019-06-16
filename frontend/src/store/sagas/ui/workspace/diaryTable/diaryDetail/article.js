import { put, all, takeLatest } from 'redux-saga/effects';
import {
  CHANGE_DIARY_ID,
  RECOVER_DIARY,
  setCurrentDiaryId 
} from '@store/actions/ui/workspace/diaryTable/diaryDetail/article';
import { closeDetail } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';
import { updateDiary } from '@store/actions/diary';
import { openSnackbar } from '@store/actions/ui/snackbar';
import { closeMenu } from '@store/actions/ui/popperMenu';

// APIs
function* invokeChangeDiaryId(action) {
  const { diaryId } = action.payload;

  yield put(setCurrentDiaryId({ diaryId }));
}

function* invokeRecoverDiary(action) {
  const { diary } = action.payload;
  const newDiary = Object.assign({}, diary, { deletedAt: null, userId: diary.user.id });
  yield put(updateDiary({ diary: newDiary }));
  yield put(openSnackbar({ message: "Recovered a Diary!", variant: 'success' }));
  yield put(closeMenu());
  yield put(closeDetail())
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(CHANGE_DIARY_ID, invokeChangeDiaryId);
  yield takeLatest(RECOVER_DIARY, invokeRecoverDiary);
}

export default function* articleSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}