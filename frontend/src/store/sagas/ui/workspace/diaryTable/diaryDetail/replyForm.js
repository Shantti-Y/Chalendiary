import { put, all, takeLatest, select } from 'redux-saga/effects';
import {
  INITIALIZE_INPUT_ATTRIBUTES,
  CHANGE_INPUT_ATTRIBUTES,
  SUBMIT_INPUT,
  setInput
} from '@store/actions/ui/workspace/diaryTable/diaryDetail/replyForm';
import { changeArticle } from '@store/actions/ui/workspace/diaryTable/diaryDetail/base';
import { openSnackbar } from '@store/actions/ui/snackbar';
import {
  addNewReply,
  updateReply
} from '@store/actions/reply';
import { snackbarVariants } from '@store/reducers/ui/snackbar';

const getState = state => state.ui.workspace.diaryTable.diaryDetail.replyForm;

// APIs
function* invokeInitializeInputAttributes(action) {
  const { reply } = action.payload;
  
  const newInput = Object.assign({}, {
    id: null,
    userId: null,
    diaryId: null,
    contentText: ''
  }, reply);
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
  const newInput = Object.assign({}, input);
  if (input.id) {
    yield put(updateReply({ reply: newInput }));
    // TODO handle actions depending on result of adding new diary
    yield put(openSnackbar({ message: "Updated The New Reply!", variant: snackbarVariants.SUCCESS }));
  } else {
    yield put(addNewReply({ reply: newInput }));
    // TODO handle actions depending on result of adding new diary
    yield put(openSnackbar({ message: "Posted A Reply!", variant: snackbarVariants.SUCCESS }));
  }

  const diaryId = input.diaryId;
  yield put(changeArticle({ diaryId }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(INITIALIZE_INPUT_ATTRIBUTES, invokeInitializeInputAttributes);
  yield takeLatest(SUBMIT_INPUT, invokeSubmitInput);
  yield takeLatest(CHANGE_INPUT_ATTRIBUTES, invokeChangeInputAttributes);
}

export default function* replyFormSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}