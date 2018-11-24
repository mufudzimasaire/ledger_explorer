// Libraries
import { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { fetchAccountInformation } from '../actions'

class Index extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    return this.props.dispatch(fetchAccountInformation(event.target.address.value))
  }

  render () {
    return (
      <div>
        Welcome to the XRP ledger explorer!
        <form onSubmit={ this.handleSubmit }>
          <input type='text' name='address' placeholder='Enter your wallet address, eg. rxxxxxxx...' pattern='[1-9a-km-zA-HJ-NP-Z]{25,35}'/>
          <input type='submit' value='Submit' />
        </form>
        <p>{ JSON.stringify(this.props.account) }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { account } = state
  return { account }
}

export default connect(mapStateToProps)(Index)