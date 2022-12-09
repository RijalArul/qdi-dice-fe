import { combineReducers } from 'redux'
import userReducer from './UserReducer'

const reducer = combineReducers({
  userState: userReducer
})

export default reducer
