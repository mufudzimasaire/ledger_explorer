// Libraries
import { combineReducers } from 'redux'

// Reducers
import accountReducer from './AccountReducer'
import loadingReducer from './LoadingReducer'

export default combineReducers({
  account: accountReducer,
  loading: loadingReducer
})
