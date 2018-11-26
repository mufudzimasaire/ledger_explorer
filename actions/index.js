// Libs
import LedgerClient from '../lib/ledger-client'

// Action Types
import { FETCH_ACCOUNT_INFORMATION, SET_LOADING, SET_REQUEST_ERROR } from '../actions/action-types'

// Constants
const ledgerAPIClient = new LedgerClient()

export const fetchAccountInformation = (address) => {
  return (dispatch) => {
    dispatch(setLoadingState(true))
    dispatch(setErrorState(false))
    return (
      ledgerAPIClient.lookup(address)
        .then((accountInformation) => {
          dispatch({ type: FETCH_ACCOUNT_INFORMATION, payload: accountInformation })
          dispatch(setLoadingState(false))
        })
        .catch((error) => {
          dispatch(setLoadingState(false))
          dispatch(setErrorState(true))
        })
    )
  }
}

function setLoadingState (state) {
  return {
    type: SET_LOADING,
    payload: state
  }
}

function setErrorState (state) {
  return {
    type: SET_REQUEST_ERROR,
    payload: state
  }
}