// Libraries
import { Component } from 'react'
import { connect } from 'react-redux'

//Components
import Layout from '../components/layout'
import Transactions from '../components/transactions'

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
      <Layout>
        Welcome to the XRP ledger explorer!
        <form onSubmit={ this.handleSubmit }>
          <div className='input-group'>
            <Input type='text' name='address' placeholder='Enter your wallet address, eg. rxxxxxxx...' pattern='[1-9a-km-zA-HJ-NP-Z]{25,35}' required/>
            <div className='input-group-append'>
              <Button type='submit' label='Search' className='btn btn-primary'/>
            </div>
          </div>
        </form>
        <Transactions transactions={ this.props.account.transactions }/>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  const { account, errored, loading } = state
  return { account, errored, loading }
}

export default connect(mapStateToProps)(Index)
