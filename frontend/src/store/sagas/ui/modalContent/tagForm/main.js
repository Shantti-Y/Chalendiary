import { put, all, takeLatest, select } from 'redux-saga/effects';
import {
  INITIALIZE_INPUT_ATTRIBUTES,
  CHANGE_INPUT_ATTRIBUTES,
  SUBMIT_INPUT,
  ADD_USER_ID,
  REMOVE_USER_ID,
  setInput,
  setUserIds
} from '@store/actions/ui/modalContent/tagForm/main';
import {
  openSnackbar
} from '@store/actions/ui/snackbar';
import {
  closeModalContent
} from '@store/actions/ui/modalContent/base';
import {
  addNewTag,
  updateTag
} from '@store/actions/tag';
import { snackbarVariants } from '@store/reducers/ui/snackbar';

const getState = state => state.ui.modalContent.tagForm.main;

// APIs
function* invokeInitializeInputAttributes(action) {
  const { tag, userIds } = action.payload;
  const newInput = Object.assign({}, {
    id: tag.id,
    name: tag.name || '',
    ownerUserId: tag.ownerUser.id,
    publicFlag: tag.publicFlag || false,
  });
  yield put(setInput({ input: newInput, userIds }));
  yield put(setUserIds({ userIds }));
}

function* invokeChangeInputAttributes(action) {
  const { key, value } = action.payload;

  const { input } = yield select(getState);
  const newInput = Object.assign({}, input, { [key]: value });
  yield put(setInput({ input: newInput }));
}

function* invokeSubmitInput(action) {
  const { input, userIds } = yield select(getState);
  const newInput = Object.assign({}, input);
  if (input.id) {
    yield put(updateTag({ tag: newInput, userIds }));
    // TODO: create handling succeeded action into appstatus state
    yield put(openSnackbar({ message: `Updated ${input.name}!`, variant: snackbarVariants.SUCCESS }));
  } else {
    yield put(addNewTag({ tag: newInput, userIds }));
    yield put(openSnackbar({ message: `Created ${input.name}!`, variant: snackbarVariants.SUCCESS }));
  }

  yield put(closeModalContent());
}

function* invokeAddUserId(action) {
  const { userId } = action.payload;
  const { userIds } = yield select(getState);

  if (!userIds.some(id => id === userId)) {
    const newUserIds = Object.assign([], userIds);
    newUserIds.push(userId);
    yield put(setUserIds({ userIds: newUserIds }));
  } else {
    yield put(setUserIds({ userIds }));
  }
}

function* invokeRemoveUserId(action) {
  const { userId } = action.payload;
  const { userIds } = yield select(getState);

  const newUserIds = Object.assign([], userIds).filter(id => id !== userId);

  yield put(setUserIds({ userIds: newUserIds }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(INITIALIZE_INPUT_ATTRIBUTES, invokeInitializeInputAttributes);
  yield takeLatest(SUBMIT_INPUT, invokeSubmitInput);
  yield takeLatest(CHANGE_INPUT_ATTRIBUTES, invokeChangeInputAttributes);
  yield takeLatest(ADD_USER_ID, invokeAddUserId);
  yield takeLatest(REMOVE_USER_ID, invokeRemoveUserId);
}

export default function* mainSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}