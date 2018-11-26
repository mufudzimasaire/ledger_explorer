// Libraries
import { PureComponent } from 'react'

class Loading extends PureComponent {
  render () {
    return (
      <div className='o-loading--circle'>
        <div className='o-loading--loader'>
          <div className='o-loading--loader'>
            <div className='o-loading--loader'>
              <div className='o-loading--loader'>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loading
