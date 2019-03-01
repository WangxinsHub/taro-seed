import { ADD, MINUS,ASYNC } from './action-type'

const defaultState = {
  response: null,
  num: 0
}

export default function counter (state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    case ASYNC:
      return {
        ...state,
        response: action.response,
        num: state.num - 1
      }
    default:
      return state
  }
}
