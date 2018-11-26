// Libraries
import { combineReducers } from 'redux'

// Reducers
import accountReducer from './AccountReducer'
import loadingReducer from './LoadingReducer'
import requestErrorReducer from './RequestErrorReducer'

export default combineReducers({
  account: accountReducer,
  errored: requestErrorReducer,
  loading: loadingReducer
})
