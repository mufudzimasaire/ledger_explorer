// Libraries
import { Component } from 'react'

// Components
import Meta from './meta'
import Footer from './footer'

class Layout extends Component {
  render () {
    return (
      <>
        <main className='container'>
          <Meta />
          <div className='o-header--gradient e-container' />
          { this.props.children }
          <Footer />
        </main>
      </>
    )
  }
}

export default Layout
