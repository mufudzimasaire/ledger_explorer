// Libraries
import { Component } from 'react'

class Details extends Component {
  render () {
    const details = this.props.account.details
    const balance = (details && details.xrpBalance)

    if (balance) {
      return (
        <div className='row'>
          <div className='c-details'>
            <p className='c-details--balance'>
              Balance: { balance } XRP
            </p>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Details