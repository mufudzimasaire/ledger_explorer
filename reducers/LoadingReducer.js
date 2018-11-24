// Action Types
import { SET_LOADING } from '../actions/action-types'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
   case SET_LOADING:
    return action.payload
   default:
    return state
  }
 }