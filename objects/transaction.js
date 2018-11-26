// Libraries
import { PureComponent } from 'react'

class Transaction extends PureComponent {
  render () {
    const { transaction } = this.props
    const specification = transaction.specification
    return (
      <li className='o-transaction'>
        <span className='o-transaction--type'>{ transaction.type }</span>
        <span className='o-transaction--amount float-right'>{ specification.source.maxAmount.value } { specification.source.maxAmount.currency }</span>
        <hr className='featurette-divider'/>
        <p className='o-transaction--from'><strong>From: </strong>{ specification.source.address }</p>
        <p className='o-transaction--to'><strong>To: </strong>{ specification.destination.address }</p>
        <p className='o-transaction--fee'><strong>Fee: </strong> { transaction.outcome.fee } XRP</p>
      </li>
    )
  }
}

export default Transaction
