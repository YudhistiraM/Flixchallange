import CONSTANT from './constant';
import call from './api';
import { SuccessOrError } from './util';

const successRequestMovieDetail = data => ({
  type: CONSTANT.REQUEST_MOVIE_DETAIL_SUCCESS,
  payload: data,
});

const errorRequestMovieDetail = err => ({
  type: CONSTANT.REQUEST_MOVIE_DETAIL_ERROR,
  payload: err,
});

const requestMovieDetail = movieId => async (dispatch) => {
  dispatch({ type: CONSTANT.REQUEST_MOVIE_DETAIL });

  const response = await call.getMovieDetail(movieId);

  return SuccessOrError(response.status) ? dispatch(successRequestMovieDetail(response)) : dispatch(errorRequestMovieDetail(response));
};

const successRequestMovieCast = data => ({
  type: CONSTANT.REQUEST_MOVIE_CAST_SUCCESS,
  payload: data,
});

const errorRequestMovieCast = err => ({
  type: CONSTANT.REQUEST_MOVIE_CAST_ERROR,
  payload: err,
});

const requestMovieCast = movieId => async (dispatch) => {
  dispatch({ type: CONSTANT.REQUEST_MOVIE_CAST });

  const response = await call.getMovieCast(movieId);

  return SuccessOrError(response.status) ? dispatch(successRequestMovieCast(response)) : dispatch(errorRequestMovieCast(response));
};

const successRequestSimilarMovie = data => ({
  type: CONSTANT.REQUEST_SIMILAR_MOVIE_SUCCESS,
  payload: data,
});

const errorRequestSimilarMovie = err => ({
  type: CONSTANT.REQUEST_SIMILAR_MOVIE_ERROR,
  payload: err,
});

const requestSimilarMovie = movieId => async (dispatch) => {
  dispatch({ type: CONSTANT.REQUEST_SIMILAR_MOVIE });

  const response = await call.getSimilarMovie(movieId);

  return SuccessOrError(response.status) ? dispatch(successRequestSimilarMovie(response)) : dispatch(errorRequestSimilarMovie(response));
};


export function trailersHasErrored(bool) {
  return {
    type: 'TRAILERS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function trailersIsLoading(bool) {
  return {
    type: 'TRAILERS_IS_LOADING',
    isLoading: bool
  };
}

export function trailersFetchDataSuccess(trailers) {
  return {
    type: 'TRAILERS_FETCH_DATA_SUCCESS',
    trailers
  };
}

export function trailersFetchData(url) {
  return (dispatch) => {
    dispatch(trailersIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(trailersIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((trailers) => {
        dispatch(trailersFetchDataSuccess(trailers.results));
      })
      .catch(() => dispatch(trailersHasErrored(true)));
  };
}

export {
  requestMovieDetail,
  requestMovieCast,
  requestSimilarMovie,
};
