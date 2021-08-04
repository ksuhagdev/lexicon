import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cinemaWorld: null,
  filmworld: null,
  error: false,
  loader: false,
};
const updateCinemaWorld = (state, action) => {
  state.cinemaWorld = action.payload;
};

const updateFilmWorld = (state, action) => {
  state.filmworld = action.payload;
};

const updateErrorState = (state, action) => {

  state.error = action.payload;
};

const updateLoaderState = (state, action) => {
  state.loader = action.payload;
};

// REDUCER
const cinemaSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    updateCinema: updateCinemaWorld,
    updateFilm: updateFilmWorld,
    updateError: updateErrorState,
    updateLoader: updateLoaderState,
  },
});

// ACTIONS
const {updateCinema, updateFilm, updateError, updateLoader} =
  cinemaSlice.actions;

// SELECTOR
const selectCinemaWorld = ({films}) => films.cinemaWorld;
const selectFilmWorld = ({films}) => films.filmworld;
const error = ({films}) => films.error;
const loader = ({films}) => films.loader;

const cinemaReducer = cinemaSlice.reducer;

export {
  cinemaReducer,
  updateCinema,
  updateFilm,
  updateError,
  selectCinemaWorld,
  selectFilmWorld,
  error,
  updateLoader,
  loader,
};
