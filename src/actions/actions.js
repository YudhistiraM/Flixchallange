import *as types from '../constans/ActionTypes.js';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0b28f00c3e3640ff43bbda4ed765720a';

function getMoviesFailure(){
  return {type: types.MOVIES_FAILURE}
}

function getMoviesSuccess(){
  return{types: types.MOVIES_SUCCESS, movies}
}

export function getMovies(page){
  return dispatch => {
    dispatch(movieIsLoading(true))
    return request
    .get(`${API_URL}movie/now_playing?api_key=${API_KEY}&region=ID&page=${page}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      dispatch(movieIsLoading(false))
      if(err){
        console.error(err)
        dispatch(getMoviesFailure())
      }else{
        dispatch(getMoviesSuccess(res.body))
      }
    })
  }
}
