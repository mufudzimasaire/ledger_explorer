// Libraries
import { Component } from 'react'

class Details extends Component {

  renderBalance () {
    const { account } = this.props
    const details = account.details
    const balance = (details && details.xrpBalance)
    if (balance) {
      return (
        <>
          <p>Address: { account.address }</p> 
          <p>Balance: { balance } xrp</p>
        </>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      this.renderBalance()
    )
  }
}

export default Details