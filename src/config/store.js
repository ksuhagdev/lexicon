import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import {rootReducer} from '../state';

const sagaMiddleware = createSagaMiddleware();

const defaultMiddleware = getDefaultMiddleware({
  thunk: false,
});

const middleware = [...defaultMiddleware, sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export {store};
