import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {Link} from 'react-router-dom'

function Subtotal(props) {
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

      <Link to="/confirmation">
        <button
          type="button"
          style={{
            background: '#722620',
            borderRadius: '3px',
            width: '100%',
            height: '30px',
            border: '1px solid',
            marginTop: '10px',
            borderColor: '#5b0e2d',
            color: '#111'
          }}
        >
          Proceed to Payment
        </button>
      </Link>
    </div>
  )
}

export default Subtotal
