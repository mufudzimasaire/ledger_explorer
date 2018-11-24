// Libs
import LedgerClient from '../lib/ledger-client'

// Action Types
import { FETCH_ACCOUNT_INFORMATION, SET_LOADING } from '../actions/action-types'

// Constants
const ledgerAPIClient = new LedgerClient()

export const fetchAccountInformation = (address) => {
  return (dispatch) => {
    dispatch(setLoadingState(true))
    return (
      ledgerAPIClient.lookup(address)
        .then((accountInformation) => {
          dispatch({
            type: FETCH_ACCOUNT_INFORMATION,
            payload: accountInformation
          })
          dispatch(setLoadingState(false))
        })
        .catch((error) => {
          console.log(error)
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