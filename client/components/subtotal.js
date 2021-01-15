import React from 'react'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>Cart Totals</p>

            <p>
              Subtotal (0 items) : <strong>0</strong>
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
