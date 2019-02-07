import {RELATED_SUCCESS, RELATED_FAILURE} from '../constants/ActionTypes'

export default function related(state = [], action){
  switch (action.type) {
    case RELATED_SUCCESS:
    return action.related

    case RELATED_FAILURE:
    return state

    default:
    return state

  }
}
