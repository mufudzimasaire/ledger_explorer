// Libraries
import { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer className='o-footer'>
        <div className='container'>
          <p className='text-muted'>© Mufudzi Masaire { new Date().getFullYear() }
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
