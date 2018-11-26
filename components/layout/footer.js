// Libraries
import { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer className='o-footer'>
        <div className='container'>
          <a href='https://mufudzi.com' target='_blank' className='text-muted'>© Mufudzi Masaire { new Date().getFullYear() }</a>
        </div>
      </footer>
    )
  }
}

export default Footer
