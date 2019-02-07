import { MOVIES_SUCCESS, MOVIES_FAILURE } from '../constans/ActionTypes.js';

export default function Movies(state = [], action){
    switch (action.type){
      case MOVIES_SUCCESS:
      return action.movies.result

      case MOVIES_FAILURE:
      return state

      default:
      return state

    }
}
