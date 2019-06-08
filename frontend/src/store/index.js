import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from '@store/reducers';
import rootSaga from '@store/sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

export default store;