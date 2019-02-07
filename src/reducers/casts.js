import {CASTS_SUCCESS, CASTS_FAILURE} from '../constants/ActionTypes'

export default function casts(state = [], action){
  switch (action.type) {
    case CASTS_SUCCESS:
    return action.casts

    case CASTS_FAILURE:
    return state

    default:
    return state

  }
}
