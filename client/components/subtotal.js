import React from 'react'
import CurrencyFormat from 'react-currency-format'

function Subtotal(props) {
  console.log(props)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>Cart Totals</p>

            <p>
              Subtotal ({props.quantity} items) :{' '}
              <strong>${props.price / 100}</strong>
            </p>
            <small className="subtotalCoupon">
              <input type="checkout" /> Add coupon code
            </small>
          </>
        )}
        decimalScale={2}
        //   two decimal spaces
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button> Proceed to Payment </button>
    </div>
  )
}

export default Subtotal
