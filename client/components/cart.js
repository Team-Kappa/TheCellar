import {connect, useSelector, useDispatch} from 'react-redux'
import React, {useState, useEffect} from 'react'
import Subtotal from './Subtotal'
import {fetchOrder} from '../store/order'
import cart, {cartInfo} from '../store/cart'

function Cart(props) {
  //console.log('my props:', props)
  const cartState = useSelector(state => state)
  //console.log('I am the state', cartState)

  const user = cartState.user

  const userId = user.id
  const dispatch = useDispatch()

  useEffect(
    () => {
      function getCartInfo() {
        //console.log('hello from getcartinfo')
        dispatch(cartInfo(userId))
        //console.log('hello from after dispatch')
      }
      getCartInfo()
    },
    [userId]
  )
  const cartArr = cartState.cart.cart[0]
    ? cartState.cart.cart[0]
    : {products: []}
  // console.log('our information???', cartArr.products)

  let cartPrice = cartArr.products.reduce(function(a, c) {
    return c.orderDetails.productPrice + a
  }, 0)

  let cartQuantity = cartArr.products.reduce(function(a, c) {
    return c.orderDetails.productQuantity + a
  }, 0)

  console.log('our  quantity', cartArr.products.productQuantity)
  return (
    <>
      <div className="cart">
        <img className="cartAd" src="/images/winerow.jpg" alt="" />
        <div className="cartTitle">
          <h2>Cart</h2>
        </div>

        <div className="cartLeft">
          <div className="cart-CardItems">
            <h2>My Items</h2>
            {/* <img src="/images/defaultwine.png" alt="" /> */}
            {/* if cart is empty render "no items" */}
            {cartArr.products.map((items, index) => (
              <div key={index} className="itemContainer">
                <div className="item_card">
                  <img src={items.imageUrl} />
                  <h1 className="itemName">{items.name}</h1>
                  <h1 className="itemPrice">
                    {items.orderDetails.productPrice / 100}
                  </h1>
                  <h1 className="itemQuantity">
                    {items.orderDetails.productQuantity}
                  </h1>
                </div>
                {/* <Subtotal
                  quantity={items.orderDetails.productQuantity}
                  price={items.orderDetails.productPrice}
                /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cartRight">
        <Subtotal quantity={cartQuantity} price={cartPrice} />
      </div>
    </>
  )
}

export default Cart
