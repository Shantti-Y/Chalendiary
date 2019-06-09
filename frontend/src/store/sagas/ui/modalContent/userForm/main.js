import { put, all, takeLatest, select } from 'redux-saga/effects';
import {
  INITIALIZE_INPUT_ATTRIBUTES,
  CHANGE_INPUT_ATTRIBUTES,
  SUBMIT_INPUT,
  setInput
} from '@store/actions/ui/modalContent/userForm/main';
import {
  updateUser
} from '@store/actions/user';
import {
  openSnackbar
} from '@store/actions/ui/snackbar';
import {
  closeModalContent
} from '@store/actions/ui/modalContent/base';
import { snackbarVariants } from '@store/reducers/ui/snackbar';

const getState = state => state.ui.modalContent.userForm.main;

// APIs
function* invokeInitializeInputAttributes(action) {
  const { user } = action.payload;
  const newInput = Object.assign({}, {
    id: user.id,
    screenName: user.screenName,
    email: user.email,
    thumbnailPath: user.thumbnailPath,
    phone: user.phone,
    uniqueId: user.uniqueId
  });
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
  if (input.id) {
    yield put(updateUser({ user: input }));
    // TODO: create handling succeeded action into appstatus state
    yield put(openSnackbar({ message: `Updated ${input.name}!`, variant: snackbarVariants.SUCCESS }));
  }

  yield put(closeModalContent());
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(INITIALIZE_INPUT_ATTRIBUTES, invokeInitializeInputAttributes);
  yield takeLatest(SUBMIT_INPUT, invokeSubmitInput);
  yield takeLatest(CHANGE_INPUT_ATTRIBUTES, invokeChangeInputAttributes);
}

export default function* mainSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}