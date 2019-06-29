import { put, all, takeLatest, select } from 'redux-saga/effects';

import {
  INITIALIZE_INPUT_ATTRIBUTES,
  CHANGE_INPUT_ATTRIBUTES,
  SUBMIT_INPUT,
  setInput
} from '@store/actions/ui/workspace/diaryTable/diaryDetail/diaryForm';
import { closeDetail } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';
import { openSnackbar } from '@store/actions/ui/snackbar';
import {
  addNewDiary,
  updateDiary
} from '@store/actions/diary';

import { snackbarVariants } from '@store/reducers/ui/snackbar';

const getState = state => state.ui.workspace.diaryTable.diaryDetail.diaryForm;

// APIs
function* invokeInitializeInputAttributes(action) {
  const { diary } = action.payload;
  const newInput = Object.assign({}, {
    id: null,
    userId: null,
    contentText: '',
    diaryId: null,
    postedAt: null
  }, diary);
  yield put(setInput({ input: newInput }));
}

function* invokeChangeInputAttributes(action) {
  const { key, value } = action.payload;

  const { input } = yield select(getState);
  const newInput = Object.assign({}, input, { [key]: value });
  yield put(setInput({ input: newInput }));
}

function* invokeSubmitInput(action) {
  const { input } = action.payload;
  const newInput = Object.assign({}, input, { postedAt: input.postedAt.format("YYYY-MM-DD") });
  if (input.id) {
    yield put(updateDiary({ diary: newInput }));
    // TODO handle actions depending on result of adding new diary
    yield put(openSnackbar({ message: "Updated The New Diary!", variant: snackbarVariants.SUCCESS }));
  } else {
    yield put(addNewDiary({ diary: newInput }));
    // TODO handle actions depending on result of adding new diary
    yield put(openSnackbar({ message: "Posted A Diary!", variant: snackbarVariants.SUCCESS }));
  }
  // TODO: replace changeArticle instead of closing diaryDetail
  yield put(closeDetail());
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(INITIALIZE_INPUT_ATTRIBUTES, invokeInitializeInputAttributes);
  yield takeLatest(SUBMIT_INPUT, invokeSubmitInput);
  yield takeLatest(CHANGE_INPUT_ATTRIBUTES, invokeChangeInputAttributes);
}

export default function* diaryFormSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}