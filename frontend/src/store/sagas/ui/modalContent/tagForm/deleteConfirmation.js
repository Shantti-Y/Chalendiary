import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import {
  OPEN_DELETE_CONFIRMATION,
  CLOSE_DELETE_CONFIRMATION,
  SUBMIT_DELETE,
  setOpened,
  setTag
} from '@store/actions/ui/modalContent/tagForm/deleteConfirmation';
import { closeModalContent } from '@store/actions/ui/modalContent/base';
import { openSnackbar } from '@store/actions/ui/snackbar';
import { deleteTag } from '@store/actions/tag';

import { snackbarVariants } from '@store/reducers/ui/snackbar';

const getTags = state => state.tag.tags

// APIs
function* invokeOpenDeleteConfirmation(action) {
  const { tagId } = action.payload;
  const tags = yield select(getTags);
  yield put(setTag({ tag: tags.find(tag => tag.id === tagId) }));
  yield put(setOpened({ opened: true }));
}

function* invokeCloseDeleteConfirmation(action) {
  yield put(setOpened({ opened: false }));
  yield put(setTag({ tag: null }));
}

function* invokeSubmitDelete(action) {
  const { tagId } = action.payload;

  yield put(deleteTag({ tagId }));
  // TODO: create handling succeeded action into appstatus state
  yield put(openSnackbar({ message: `Tag Deleted`, variant: snackbarVariants.SUCCESS }));
  yield put(setOpened({ opened: false }));
  yield put(closeModalContent());
  yield put(setTag({ tag: null }));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(OPEN_DELETE_CONFIRMATION, invokeOpenDeleteConfirmation);
  yield takeLatest(CLOSE_DELETE_CONFIRMATION, invokeCloseDeleteConfirmation);
  yield takeLatest(SUBMIT_DELETE, invokeSubmitDelete);
}

export default function* deleteConfirmationSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}