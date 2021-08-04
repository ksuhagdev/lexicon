import {all, fork} from 'redux-saga/effects';

import {watchCinema} from './cinemaApiCall';
export default function* rootSaga() {
  yield all([fork(watchCinema)]);
}
