import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import diceReducer from './DIceReducer'

const reducer = combineReducers({
  userState: userReducer,
  diceState: diceReducer
})

export default reducer
