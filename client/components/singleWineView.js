import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleWines} from '../store/product'
import Button from '@material-ui/core/Button'

function SingleWine(props) {
  //STATE

  const [state, setState] = useState({
    wineId: props.match.params.wineId,
    count: 0,
    total: 0
  })

  console.log('prooooppppppsss', props)
  const singleWine = useSelector(
    state => (state.product.singleWine ? state.product.singleWine : {})
  )
  const {name, price, type, year, origin, description} = singleWine
  console.log('calvinnnnnnnnnn', singleWine)

  const user = useSelector(state => state.user)
  console.log('userrrr:', user)

  const wineId = props.match.params.wineId
  const dispatch = useDispatch()
  useEffect(
    () => {
      async function getWines() {
        await dispatch(fetchSingleWines(wineId))
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

    console.log(state)
  }

  // COME BACK TO FIX TOTAL
  const handleDecrement = () => {
    if (count === 0) {
      return 0
    } else {
      setState(prevCount => prevCount - 1)
      setTotal(prevTotal => prevTotal - Number(price))
    }
  }

  const addToCart = () => {
    //quantity, price, wineid, userid
    const quantity = state.count
    const price = price
    const wineId = state.wineId
    const userId = user.id
    console.log('mattttttt', quantity, price, wineId, userId)
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
              <Button onClick={addToCart} variant="contained" color="primary">
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
