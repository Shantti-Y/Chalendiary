import { put, all, takeLatest, select } from 'redux-saga/effects';
import moment from 'moment';
import {
  INITIALIZE_INPUT_ATTRIBUTES,
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

const getState = state => state.ui.modalContent.diaryForm;

// APIs
function* invokeInitializeInputAttributes(action) {
  const { diary } = action.payload;
  const newInput = Object.assign({}, {
    id: null,
    userId: null,
    contentText: '',
    postedAt: moment()
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
  const { input } = yield select(getState);
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
  yield takeLatest(INITIALIZE_INPUT_ATTRIBUTES, invokeInitializeInputAttributes);
  yield takeLatest(SUBMIT_INPUT, invokeSubmitInput);
  yield takeLatest(CHANGE_INPUT_ATTRIBUTES, invokeChangeInputAttributes);
}

export default function* diaryFormSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}