import {connect} from 'react-redux'
import React from 'react'
import Subtotal from './Subtotal'

function Cart() {
  return (
    <>
      <div className="cart">
        <img className="cartAd" src="/images/winerow.jpg" alt="" />
        <div className="cartTitle">
          <h2>Cart</h2>
        </div>

        <div className="cartLeft">
          <div className="cart-CardItems">
            <h1>My Items</h1>
            {/* <img src="/images/defaultwine.png" alt="" /> */}
            {/* if cart is empty render "no items" */}
            {/* mapping items in here */}
          </div>
        </div>
      </div>
      <div className="cartRight">
        {/* <h2>Cart totals</h2> */}
        <Subtotal />
      </div>
    </>
  )
}

const mapState = state => {}

const mapDispatchToProps = dispatch => {}

export default Cart
