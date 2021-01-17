import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleWines} from '../store/product'
import Button from '@material-ui/core/Button'

function SingleWine(props) {
  console.log(props)
  const singleWine = useSelector(
    state => (state.product.singleWine ? state.product.singleWine : {})
  )
  const {name, price, type, year, origin, description} = singleWine
  console.log(singleWine)

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

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      item: {
        name: name
      }
    })
  }
  return (
    <div className="singleWineMain">
      <div className="single_backBTN">
        <Link style={{textDecoration: 'none'}} to="/wines">
          <Button>Go back</Button>
        </Link>
      </div>
      <div className="singleWineContainer">
        {/* Wine description card */}
        <div className="wine_image">
          <img src="/images/defaultwine.png" />
        </div>
        <div className="singleWineCard">
          <div className="wine_info">
            <h1>{name}</h1>
            <ul>
              <li>Price: $ {price / 100} </li>
              <li>Type: {type}</li>
              <li>Origin: {origin}</li>
              <li>Year: {year}</li>
              <li>Description:{description}</li>
            </ul>
          </div>
          <div>
            {/* QUANTITY BUTTON */}
            <div className="quantity">
              <Button onClick={handleDecrement}>-</Button>
              <h1>{count}</h1>
              <Button onClick={handleIncrement}>+</Button>

              {/* ADD TO CART BUTTON */}
              <Button onClick={addToCart} variant="contained" color="primary">
                Add to cart
              </Button>
            </div>
            <div className="wine_total">
              <p>Total: ${total / 100}</p>
            </div>
          </div>

          {/* PRICE */}

          {/* COME BACK TO FIX TOTAL CONVERSION */}
        </div>
      </div>
    </div>
  )
}

export default SingleWine
