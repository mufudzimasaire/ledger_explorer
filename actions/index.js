// Libs
import LedgerClient from '../lib/ledger-client'

// Action Types
import { FETCH_ACCOUNT_INFORMATION } from '../actions/action-types'

// Constants
const ledgerAPIClient = new LedgerClient()

export const fetchAccountInformation = (address) => {
  return (dispatch) => {
    return (
      ledgerAPIClient.lookup(address)
        .then((accountInformation) => {
          dispatch({
            type: FETCH_ACCOUNT_INFORMATION,
            payload: accountInformation
          })
        })
        .catch((error) => {
          console.log(error)
        })
    )
  }
}
