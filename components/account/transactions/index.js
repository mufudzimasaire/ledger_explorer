// Libraries
import { Component } from 'react'

// Objects
import Transaction from '../../../objects/transaction'

class Transactions extends Component {
  render () {
    const { transactions } = this.props
    return (
      <>
        { 
          transactions && transactions.map((transaction, index) => {
            return <Transaction key={index} transaction={ transaction } />
          })
        }
      </>
    )
  }
}

export default Transactions