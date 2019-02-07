import {TRAILERS_SUCCESS, TRAILERS_FAILURE} from '../constants/ActionTypes'

export default function trailers(state = [], action){
  switch (action.type) {
    case TRAILERS_SUCCESS:
    return action.trailer

    case TRAILERS_FAILURE:
    return state

    default:
    return state

  }
}
