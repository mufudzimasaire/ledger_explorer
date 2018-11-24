// Libraries
import { RippleAPI } from 'ripple-lib'

class LedgerClient {
  /**
   * Initiates the class.
   * @param {RippleAPI} apiClient - The ledger API client.
   * @param {string} server - The ledger server address to connect to.
   */
  constructor(apiClient = RippleAPI, server = 'wss://s1.ripple.com') {
    this.api = new apiClient({ server: server })
  }

  /**
   * Looksup the given account information.
   * @param {string} address - The account address.
   * @return {object} The account information.
   */
  async lookup(address) {
    try {
      console.log('Looking up account information for: ', address)
      await this.api.connect()
      const accountInformation = await this.api.getAccountInfo(address)
      return accountInformation
    } catch (error) {
      console.log(error)
    } finally {
      this.api.disconnect()
      console.log('API disconnected.')
    }
  }
}

export default LedgerClient
