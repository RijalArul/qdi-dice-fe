import { SET_ROOMS, SET_ERRORS } from '../keys'
const initialState = {
  rooms: [],
  room: {},
  errors: []
}

function diceReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_ROOMS:
      return {
        ...state,
        rooms: payload,
        errors: null
      }
    case SET_ERRORS:
      return { ...state, errors: payload }
    default:
      return state
  }
}

export default diceReducer
