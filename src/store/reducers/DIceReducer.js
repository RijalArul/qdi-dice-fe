import { SET_ROOMS, SET_ERRORS, SET_ROOM, SET_DICES, SET_WINNER } from '../keys'
const initialState = {
  rooms: [],
  winners: {},
  dices: [],
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
    case SET_ROOM:
      return {
        ...state,
        room: payload,
        errors: null
      }
    case SET_DICES:
      return {
        ...state,
        dices: payload
      }
    case SET_WINNER:
      return {
        ...state,
        winners: payload
      }
    case SET_ERRORS:
      return { ...state, errors: payload }
    default:
      return state
  }
}

export default diceReducer
