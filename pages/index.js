// Libraries
import { Component } from 'react'
import { connect } from 'react-redux'

//Components
import Layout from '../components/layout'
import Transactions from '../components/account/transactions'
import Details from '../components/account/details'

// Objects
import Button from '../objects/button'
import Input from '../objects/input'
import Loading from '../objects/loading'
import Logo from '../objects/logo'

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

  renderSearchForm() {
    return (
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={ this.handleSubmit }>
            <div className='input-group'>
              <Input type='text' name='address' placeholder='Enter your wallet address, eg. rxxxxxxx...' pattern='[1-9a-km-zA-HJ-NP-Z]{25,35}' required/>
              <div className='input-group-append'>
                <Button type='submit' label='Search' className='btn btn-primary'/>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

  renderAccountInformation() {
    const { account } = this.props

    if (this.props.loading) {
      return (
        <Loading/>
      )
    } else {
      return (
        <>
          <Details account={ account }/>
          <Transactions account={ account }/>
        </> 
      )
    }
  }

  render () {
    return (
      <Layout>
        <Logo />
        { this.renderSearchForm() }
        { this.renderAccountInformation() }
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  const { account, errored, loading } = state
  return { account, errored, loading }
}

export default connect(mapStateToProps)(Index)
