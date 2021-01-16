import {connect} from 'react-redux'
import React from 'react'
import Subtotal from './Subtotal'

function Cart() {
  return (
    <div className="cart">
      <div className="cartLeft">
        <img className="cartAd" src="/images/winerow.jpg" alt="" />

        <div className="cartTitle">
          <h2>Cart</h2>
        </div>
      </div>

      <div className="cartRight">
        {/* <h2>Cart totals</h2> */}
        <Subtotal />
      </div>
    </div>
  )
}

const mapState = state => {}

const mapDispatchToProps = dispatch => {}

export default Cart
