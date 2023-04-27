// Write your code here
import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-conrtainer">
      {children} <GrFormClose className="bsXstyle" />
    </div>
  )
}
export default Notification
