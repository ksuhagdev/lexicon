import {put, call, takeLatest} from 'redux-saga/effects';
import {cinema} from '../service';
import {CinemaState} from '../state';
import DispatchConstants from './DispatchConstants';
export function* cinemaApiCall(action) {
  yield put(CinemaState.updateLoader(true));
  yield put(CinemaState.updateError(false))
  const filmApiResponse = yield call(cinema.callApi, 'filmworld');
  //   console.log('API REsponse for ', action.payload, apiResponse);
  if (filmApiResponse.response_type === 'success') {
    yield put(CinemaState.updateFilm(filmApiResponse.response));
    const cinemaApiReponse = yield call(cinema.callApi, 'cinemaworld');

    if (cinemaApiReponse.response_type === 'success') {
      yield put(CinemaState.updateCinema(cinemaApiReponse.response));
      yield put(CinemaState.updateLoader(false));
    } else {
      yield put(CinemaState.updateError(true));

      yield put(CinemaState.updateCinema(null));

      yield put(CinemaState.updateLoader(false));
    }
  } else {
    yield put(CinemaState.updateError(true));

    yield put(CinemaState.updateFilm(null));

    yield put(CinemaState.updateLoader(false));
  }
}

export function* watchCinema() {
  yield takeLatest(DispatchConstants.CINEMA_API, cinemaApiCall);
}
