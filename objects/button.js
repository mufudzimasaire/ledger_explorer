// Libraries
import { PureComponent } from 'react'

class Button extends PureComponent {
  render () {
    const { label, ...otherProps } = this.props
    return (
      <button { ...otherProps }>
        { label }
      </button>
    )
  }
}

export default Button