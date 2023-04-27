// Write your code here
import {Component} from 'react'
import {MdWarning, MdInfo} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import {AiFillCheckCircle} from 'react-icons/ai'

import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="container1">
        <h1 className="">Alert Notifications</h1>
        <Notification>
          <div className="container-to-check-content">
            <AiFillCheckCircle className="iconstyle green" />
            <div className="cont-head-para">
              <h1 className="heading-style green">Success</h1>
              <p className="para-style">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </Notification>

        <Notification>
          <div className="container-to-check-content">
            <RiErrorWarningFill className="iconstyle red" />
            <div className="cont-head-para">
              <h1 className="heading-style red">Error</h1>
              <p className="para-style">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>

        <Notification>
          <div className="container-to-check-content">
            <MdWarning className="iconstyle yellow" />
            <div className="cont-head-para">
              <h1 className="heading-style yellow">Warning</h1>
              <p className="para-style">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </Notification>

        <Notification>
          <div className="container-to-check-content">
            <MdInfo className="iconstyle blue" />
            <div className="cont-head-para">
              <h1 className="heading-style blue">Info</h1>
              <p className="para-style">
                Anyone on the internet can view these files
              </p>
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}
export default AlertNotifications
