import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  CHANGE_INPUT_ATTRIBUTES,
  SUBMIT_INPUT,
  setInput
} from '@store/actions/ui/modalContent/diaryForm';
import {
  openSnackbar
} from '@store/actions/ui/snackbar';
import {
  closeModalContent
} from '@store/actions/ui/modalContent/base';
import {
  addNewDiary,
  updateDiary
} from '@store/actions/diary';

// APIs
function* invokeChangeInputAttributes(action) {
  yield put(setInput({ ...action.payload }));
}

function* invokeSubmitInput(action) {
  const { input } = action.payload;
  const newInput = Object.assign({}, input, { postedAt: input.postedAt.format("YYYY-MM-DD") });
  if(input.id){
    yield put(updateDiary({ diary: newInput }));
    // TODO handle actions depending on result of adding new diary
    yield put(openSnackbar({ message: "Updated The New Diary!", variant: 'success' }));
  }else{
    yield put(addNewDiary({ diary: newInput }));
    // TODO handle actions depending on result of adding new diary
    yield put(openSnackbar({ message: "Posted A Diary!", variant: 'success' }));
  }

  yield put(closeModalContent());
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(SUBMIT_INPUT, invokeSubmitInput);
  yield takeLatest(CHANGE_INPUT_ATTRIBUTES, invokeChangeInputAttributes)
}

export default function* diaryFormSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}