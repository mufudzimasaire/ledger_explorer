// Libraries
import { PureComponent } from 'react'

class Transaction extends PureComponent {
  render () {
    const { transaction } = this.props
    return (
      <p>{ JSON.stringify(transaction) }</p>
    )
  }
}

export default Transaction