// Libraries
import { PureComponent } from 'react'

class Transaction extends PureComponent {
  render () {
    const { transaction } = this.props
    const specification = transaction.specification
    return (
      <div className="o-transaction">
        <p>Amount: { specification.source.maxAmount.value }  { specification.source.maxAmount.currency }</p>
        <p>Destination: { specification.destination.address }</p>
        <p>Fee: { transaction.outcome.fee } xrp</p>
      </div>
    )
  }
}

export default Transaction
