import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleWines} from '../store/product'

function SingleWine(props) {
  const singleWine = useSelector(
    state => (state.product.singleWine ? state.product.singleWine : {})
  )
  const {name, price, type, year, origin, description} = singleWine
  console.log('single wine -->', singleWine)
  // console.log('props-->', props)
  const wineId = props.match.params.wineId
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(fetchSingleWines(wineId))
    },
    [dispatch]
  )

  //console.log('single wine -->', singleWine)
  //STATE
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }
  const handleDecrement = () => {
    if (count === 0) {
      return 0
    } else {
      setCount(prevCount => prevCount - 1)
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

        {/* if(count>0){
            total += price * count}
            else {return null} */}
        <p>Total: $</p>
      </div>
    </div>
  )
}
// WAITING FOR REDUX STORE
// const mapStateToProps = (state) => {
//   return {
//     singleWine: state.product,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchSingleWines: (id) => dispatch(fetchSingleWines(id)),
//   }
// }

export default SingleWine
