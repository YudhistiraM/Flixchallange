import {MOVIE_SUCCESS, MOVIE_FAILURE} from '../constants/ActionTypes'

export default function movie(state = [], action){
  switch (action.type) {
    case MOVIE_SUCCESS:
    return action.movie

    case MOVIE_FAILURE:
    return state

    default:
    return state

  }
}
