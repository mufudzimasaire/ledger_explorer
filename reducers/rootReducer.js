// Libraries
import { combineReducers } from 'redux'

// Reducers
import accountReducer from './AccountReducer'

export default combineReducers({
  account: accountReducer
})
