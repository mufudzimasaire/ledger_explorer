// Action Types
import { SET_REQUEST_ERROR } from '../actions/action-types'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
   case SET_REQUEST_ERROR:
    return action.payload
   default:
    return state
  }
 }