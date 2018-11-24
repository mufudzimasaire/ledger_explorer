// Action Types
import { FETCH_ACCOUNT_INFORMATION } from '../actions/action-types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
   case FETCH_ACCOUNT_INFORMATION:
    return Object.assign({}, state, action.payload)
   default:
    return state
  }
 }