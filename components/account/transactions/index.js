// Libraries
import { Component } from 'react'

// Objects
import Transaction from '../../../objects/transaction'

class Transactions extends Component {
  renderTransactions() {
    const transactions = this.props.account.transactions
    if (transactions) {
      return (
        <div className='c-transactions'>
          <p className='c-transaction--title'>Transactions</p>
          <ul className='c-transactions--timeline'>
            { 
              transactions && transactions.map((transaction, index) => {
                return (
                  <Transaction key={index} transaction={ transaction } /> 
                )
              })
            }
          </ul>
        </div>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          { this.renderTransactions() }
        </div>
      </div>
    )
  }
}

export default Transactions