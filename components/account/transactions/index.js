// Libraries
import { Component } from 'react'

// Objects
import Transaction from '../../../objects/transaction'

class Transactions extends Component {
  renderTransactions() {
    const transactions = this.props.account.transactions
    return (
      transactions && transactions.map((transaction, index) => {
        return (
          <Transaction key={index} transaction={ transaction } />
        )
      })
    )
  }

  render () {
    return (
      <div className='c-transactions'>
        { this.renderTransactions() }
      </div>
    )
  }
}

export default Transactions