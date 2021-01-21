import React from 'react'
import Button from '@material-ui/core/Button'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

const Confirmation = () => (
  <div className="CONFIRMATION_Container">
    <div className="CONFIRMATION_Icon">
      <CheckCircleOutlineOutlinedIcon fontSize="large" />
    </div>
    <div className="CONFIRMATION_Title">
      <h1>THANK YOU</h1>
    </div>
    <div className="CONFIRMATION_Body">
      <h1>Your order is on its way!</h1>
    </div>
    <a>
      <img
        className="CONFIRMATION_Gif"
        src="https://cdn.shopify.com/s/files/1/0978/4862/files/shipping.gif?v=1490718891"
      />
    </a>
    <Button href="/wines" variant="outlined">
      SHOP MORE
    </Button>
  </div>
)

export default Confirmation
