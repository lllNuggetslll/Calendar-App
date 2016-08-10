import { FETCH_EVENTS, ADD_EVENT, DELETE_EVENT, EDIT_EVENT } from '../actions/index';

const INITIAL_STATE = { all: [], event: null }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_EVENTS:
      return state;
    case ADD_EVENT:
      return {  all: [ ...state.all, action.payload ] }
    case DELETE_EVENT:
      return {  all: [ action.payload ] }
    case EDIT_EVENT:
      return {  all: [ action.payload ] }

    default:
      return state;
  }

}
