// Libraries
import { PureComponent } from 'react'

class Input extends PureComponent {
  render () {
    return (
      <input { ...this.props }/>
    )
  }
}

export default Input
