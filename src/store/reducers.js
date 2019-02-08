import { combineReducers } from 'redux';

import nowPlayingReducer from '../components/MovieList/reducer';
import {
  trailers,
  trailersHasErrored,
  trailersIsLoading,
  movieDetailReducer,
  movieCastReducer,
  similarMovieReducer,
 } from '../components/MovieDetail/reducer';

import balanceReducer from '../components/Alert/reducer';

const rootReducer = combineReducers({
  trailers,
  trailersHasErrored,
  trailersIsLoading,
  nowPlayingReducer,
  movieDetailReducer,
  movieCastReducer,
  balanceReducer,
  similarMovieReducer,
});

export default rootReducer;
