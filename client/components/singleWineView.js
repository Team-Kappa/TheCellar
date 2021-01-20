import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleWines} from '../store/product'
import {me} from '../store/user'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {itemToCart} from '../store/cart'

function SingleWine(props) {
  //STATE
  const [state, setState] = useState({
    wineId: props.match.params.wineId,
    count: 0,
    total: 0
  })

  const singleWine = useSelector(
    state => (state.product.singleWine ? state.product.singleWine : {})
  )

  const {name, price, type, year, origin, description} = singleWine

  const user = useSelector(state => state.user)

  // const wineId = props.match.params.wineId
  const dispatch = useDispatch()
  useEffect(
    () => {
      async function getWines() {
        await dispatch(fetchSingleWines(state.wineId))
      }
      getWines()

      async function getUser() {
        await dispatch(me())
      }
      getUser()
    },
    [dispatch]
  )

  // COME BACK TO FIX TOTAL
  const handleIncrement = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + 1,
      total: prevState.total + Number(price)
    }))
  }

  // COME BACK TO FIX TOTAL
  const handleDecrement = () => {
    if (state.count === 0) {
      return 0
    } else {
      setState(prevState => ({
        ...prevState,
        count: prevState.count - 1,
        total: prevState.total - Number(price)
      }))
    }
  }

  const handleAddCart = async () => {
    //quantity, price, wineid, userid
    const quantity = state.count
    const price = state.total
    const wineId = state.wineId
    const userId = user.id

    const res = userId
      ? await axios.post(`/api/orderDetails/`, {
          userId: user.id,
          productId: wineId,
          productQuantity: quantity,
          productPrice: price
        })
      : undefined
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
              <h1>{state.count}</h1>
              <Button onClick={handleIncrement}>+</Button>

              {/* ADD TO CART BUTTON */}
              <Button
                onClick={handleAddCart}
                variant="contained"
                color="primary"
              >
                Add to cart
              </Button>
            </div>
            <div className="wine_total">
              <p>Total: ${state.total / 100}</p>
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
