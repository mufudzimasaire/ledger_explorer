// Libraries
import { PureComponent } from 'react'
import Link from 'next/link'

class Logo extends PureComponent {
  render () {
    return (
      <div className='o-logo'>
        <Link href='/'>
          <a>
            <img width={72} height={79} src='/static/logo.png' />
          </a>
        </Link>
      </div>
    )
  }
}

export default Logo
