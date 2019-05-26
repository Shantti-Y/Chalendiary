import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  CHANGE_INPUT_ATTRIBUTES,
  SUBMIT_INPUT,
  setInput
} from '@store/actions/ui/modalContent/replyForm';
import {
  openSnackbar
} from '@store/actions/ui/snackbar';
import {
  closeModalContent
} from '@store/actions/ui/modalContent/base';
import {
  addNewReply,
  updateReply
} from '@store/actions/reply';

// APIs
function* invokeChangeInputAttributes(action) {
  yield put(setInput({ ...action.payload }));
}

function* invokeSubmitInput(action) {
  const { input } = action.payload;
  const newInput = Object.assign({}, input);
  if (input.id) {
    yield put(updateReply({ reply: newInput }));
    // TODO handle actions depending on result of adding new diary
    yield put(openSnackbar({ message: "Updated The New Reply!", variant: 'success' }));
  } else {
    yield put(addNewReply({ reply: newInput }));
    // TODO handle actions depending on result of adding new diary
    yield put(openSnackbar({ message: "Posted A Reply!", variant: 'success' }));
  }

  yield put(closeModalContent());
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(SUBMIT_INPUT, invokeSubmitInput);
  yield takeLatest(CHANGE_INPUT_ATTRIBUTES, invokeChangeInputAttributes)
}

export default function* uiReplyFormSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}