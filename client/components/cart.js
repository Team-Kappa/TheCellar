import {connect, useSelector, useDispatch} from 'react-redux'
import React, {useState, useEffect} from 'react'
import Subtotal from './Subtotal'
import {fetchOrder} from '../store/order'
import {cartInfo, deleteAnItem} from '../store/cart'
import Button from '@material-ui/core/Button'

function Cart(props) {
  const cartState = useSelector(state => state)

  const user = cartState.user

  const userId = user.id
  const dispatch = useDispatch()

  useEffect(
    () => {
      function getCartInfo() {
        dispatch(cartInfo(userId))
      }
      getCartInfo()
    },
    [userId]
  )

  const cartArr = cartState.cart.products ? cartState.cart.products : []

  let cartPrice = cartArr.reduce(function(a, c) {
    return c.orderDetails.productPrice + a
  }, 0)

  let cartQuantity = cartArr.reduce(function(a, c) {
    return c.orderDetails.productQuantity + a
  }, 0)

  const deleteClick = async event => {
    await dispatch(
      deleteAnItem({
        userId: cartState.cart.userId,
        orderId: cartState.cart.id,
        productId: Number(event.target.id)
      })
    )
  }

  return (
    <>
      <div className="cart">
        <img className="cartAd" src="/images/winerow.jpg" alt="" />
        <div className="cartTitle">
          <h1>Cart</h1>
        </div>

        <div className="cartLeft">
          <div className="cart-CardItems">
            <h2>My Items</h2>
            {/* <img src="/images/defaultwine.png" alt="" /> */}
            {/* if cart is empty render "no items" */}
            {!cartArr.length ? (
              <p>Please add some delicious wine to your cart! 🍷 </p>
            ) : (
              cartArr.map((items, index) => (
                <div key={index} className="itemContainer">
                  <div className="item_card">
                    <img src={items.imageUrl} />
                    <h3 className="itemName">{items.name}</h3>
                    <h3 className="itemPrice">
                      {items.orderDetails.productPrice / 100}
                    </h3>

                    <h3 className="itemQuantity">
                      {items.orderDetails.productQuantity}
                    </h3>
                    <div>
                      <button
                        style={{backgroundColor: 'red'}}
                        type="button"
                        onClick={deleteClick}
                        id={items.id}
                        color="secondary"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
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
