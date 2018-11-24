// Libraries
import { Component } from 'react'
import { connect } from 'react-redux'

// Objects
import Input from '../objects/input'
import Button from '../objects/button'

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
          <Input type='text' name='address' placeholder='Enter your wallet address, eg. rxxxxxxx...' pattern='[1-9a-km-zA-HJ-NP-Z]{25,35}' required/>
          <Button type='submit' label='Submit'/>
        </form>
        <p>{ JSON.stringify(this.props) }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loading, account } = state
  return { loading, account }
}

export default connect(mapStateToProps)(Index)