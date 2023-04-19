import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const infoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="message-container">
        <h1 className="message info">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const warningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="message-container">
        <h1 className="message warning">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const errorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="message-container">
        <h1 className=" message error">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const successNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="message-container">
        <h1 className="message success ">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="notification-container">
      <div className="container">
        <h1 className="heading">Alert Notifications</h1>
        {successNotification()}
        {errorNotification()}
        {infoNotification()}
        {warningNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
