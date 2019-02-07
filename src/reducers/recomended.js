import {RECOMMENDED_SUCCESS, RECOMMENDED_FAILURE} from '../constants/ActionTypes'

export default function recommended(state = [], action){
  switch (action.type) {
    case RECOMMENDED_SUCCESS:
    return action.recommended

    case RECOMMENDED_FAILURE:
    return state

    default:
    return state

  }
}
