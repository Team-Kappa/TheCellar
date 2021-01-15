import {connect} from 'react-redux'
import React from 'react'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img className="checkoutAd" src="/images/winebanner.png" alt="" />

        <div>
          <h2 className="checkoutTitle">Cart</h2>
        </div>
      </div>

      <div className="checkoutRight">
        {/* <h2>Cart totals</h2> */}
        <Subtotal />
      </div>
    </div>
  )
}

const mapState = state => {}

const mapDispatchToProps = dispatch => {}

export default Checkout
