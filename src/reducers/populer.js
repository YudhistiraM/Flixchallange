import {POPULAR_MOVIES_SUCCESS, POPULAR_MOVIES_FAILURE} from '../constants/ActionTypes'

export default function popular(state = [], action){
  switch (action.type) {
    case POPULAR_MOVIES_SUCCESS:
    return action.movies.results

    case POPULAR_MOVIES_FAILURE:
    return state

    default:
    return state

  }
}
