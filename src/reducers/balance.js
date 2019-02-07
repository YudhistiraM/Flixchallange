import {BALANCE_FETCH_DATA_SUCCESS} from '../constants/ActionTypes'

export default function balance(state = [], action){
  switch (action.type) {

    case BALANCE_FETCH_DATA_SUCCESS:
    return JSON.stringify(action)

    default:
    return state

  }
}
