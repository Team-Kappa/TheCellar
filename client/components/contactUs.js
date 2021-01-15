import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import PhoneInTalkTwoToneIcon from '@material-ui/icons/PhoneInTalkTwoTone'
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone'

function ContactUs() {
  return (
    <div className="contact-main">
      <img src="/images/winery.jpeg" />
      <Link style={{textDecoration: 'none'}} to="/">
        <Button> Go back to home</Button>
      </Link>
      <h1>Contact us</h1>
      <div className="contact-container">
        <div className="contact-cards">
          <div className="contact-call">
            <PhoneInTalkTwoToneIcon />
            <h2>Call us:</h2>
            <div className="call-icon" />
            <h3>1-800-624-9322</h3>
            <h3>Mon-Fri: 7am to 6pm (EST)</h3>
          </div>

          <div className="email">
            <EmailTwoToneIcon />
            <h2>Email us:</h2>
            <div className="email-icon" />
            <h3>WineShopper@grapesRus.com</h3>
          </div>
        </div>

        <div />
      </div>
    </div>
  )
}

export default ContactUs
