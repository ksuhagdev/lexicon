import {combineReducers} from 'redux';
import * as CinemaState from './cinemaState';

const rootReducer = combineReducers({
  films: CinemaState.cinemaReducer,
});

export {rootReducer, CinemaState};
