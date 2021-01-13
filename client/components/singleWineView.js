import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleWines} from '../store/product'

function SingleWine(props) {
  const singleWine = useSelector(
    state => (state.product.singleWine ? state.product.singleWine : {})
  )
  const {name, price, type, year, origin, description} = singleWine

  const wineId = props.match.params.wineId
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(fetchSingleWines(wineId))
    },
    [dispatch]
  )

  //STATE
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  // COME BACK TO FIX TOTAL
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
    setTotal(prevTotal => prevTotal + Number(price))
  }
  // COME BACK TO FIX TOTAL
  const handleDecrement = () => {
    if (count === 0) {
      return 0
    } else {
      setCount(prevCount => prevCount - 1)
      setTotal(prevTotal => prevTotal - Number(price))
    }
  }
  return (
    <div className="singleWineContainer">
      <Link to="/home">
        <button type="button">Go back to home page</button>
      </Link>

      <img style={{height: 400}} src="/images/defaultwine.png" />

      {/* Wine description card */}
      <div className="singleWineCard">
        <h1>{name}</h1>
        <ul>
          <li>Price: {price} </li>
          <li>Type: {type}</li>
          <li>Origin: {origin}</li>
          <li>Year: {year}</li>
          <li>Description:{description}</li>
        </ul>
      </div>

      {/* QUANTITY BUTTON */}
      <div className="quantity">
        <button type="button" onClick={handleDecrement}>
          -
        </button>
        <h1>{count}</h1>
        <button type="button" onClick={handleIncrement}>
          +
        </button>

        {/* ADD TO CART BUTTON */}
        <button type="submit">Add to cart</button>

        {/* PRICE */}

        {/* COME BACK TO FIX TOTAL CONVERSION */}
        <p>Total: $ {Number.parseFloat(total)}</p>
      </div>
    </div>
  )
}

export default SingleWine
