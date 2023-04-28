// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="alert-container">
      <div className="alert-type-container">{children}</div>
      <GrFormClose />
    </div>
  )
}

export default Notification
