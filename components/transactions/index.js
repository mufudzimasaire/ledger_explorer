// Libraries
import { Component } from 'react'

class Transactions extends Component {
  render () {
    const { transactions } = this.props
    return (
      <>
        { 
          transactions && transactions.map((transaction, index) => {
            return (
              <p key={index}>{ JSON.stringify(transaction) }</p>
            )
          })
        }
      </>
    )
  }
}

export default Transactions