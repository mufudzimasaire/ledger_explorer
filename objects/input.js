// Libraries
import { PureComponent } from 'react'

class Input extends PureComponent {
  render () {
    return (
      <input className='form-control' { ...this.props }/>
    )
  }
}

export default Input
