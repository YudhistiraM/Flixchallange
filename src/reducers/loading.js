import {MOVIE_IS_LOADING} from '../constants/ActionTypes'

export default function loading(state = false, action){
  switch (action.type) {
    case MOVIE_IS_LOADING:
      return action.loading;
    default:
      return state;

  }
}
