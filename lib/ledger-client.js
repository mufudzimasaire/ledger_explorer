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
      // Connect to API
      await this.api.connect()
      // Fetch account information
      const accountInformation = await this.api.getAccountInfo(address)
      // Fetch transactions
      const transactions = await this.getTransactions(address)
      // Amalgamate results
      return { details: accountInformation, transactions: transactions }
    } catch (error) {
      console.log(error)
    } finally {
      this.api.disconnect()
      console.log('API disconnected.')
    }
  }

  /**
   * Looksup the given account transaction history.
   * @param {string} address - The account address.
   * @return {object} The account payment history.
   */
  async getTransactions(address) {
    // Fetch server information
    const serverInfo = await this.api.getServerInfo()
    const ledgers = serverInfo.completeLedgers.split('-')
    const minLedgerVersion = Number(ledgers[0])
    const maxLedgerVersion = Number(ledgers[1])
    // Make request for account transactions
    const transactions = await this.api.getTransactions(address, { minLedgerVersion, maxLedgerVersion })
    return transactions
  }
}

export default LedgerClient
