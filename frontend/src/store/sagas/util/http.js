import { all, takeEvery, call, put } from 'redux-saga/effects';

import { APPLY_HTTP_GET } from '@store/actions/util/http';
import { applyStatus } from '@store/actions/util/appStatus';

import { appStatuses } from '@store/reducers/util/appStatus';

import { openSnackbar } from '@store/actions/ui/snackbar';

import { applyHttpGet } from '@utils/client/http';
import { snackbarVariants } from '@store/reducers/ui/snackbar';

function* invokeApplyHttpGet(action) {
  const { url, options, callback } = action.payload;
  const response = yield call(applyHttpGet, url, options);
  switch(response.status){
    case 200:
      yield put(applyStatus({ status: appStatuses.SUCCESS }));
      yield callback(response.data);
      break;
    case 403:
      yield put(applyStatus({ status: appStatuses.DANGER }));
      yield put(openSnackbar({ message: "Authentication is invalid. Please login", variant: snackbarVariants.DANGER }))
      break;
  }
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeEvery(APPLY_HTTP_GET, invokeApplyHttpGet);
}

export default function* httpSaga() {
  yield all([
    watchAsyncTriggers()
  ]);
}