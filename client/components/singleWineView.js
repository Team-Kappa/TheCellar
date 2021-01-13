import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleWines} from '../store/product'

function SingleWine(props) {
  const {price, type, origin, description} = props
  console.log('props-->', props)
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
        <h1>Wine Name</h1>
        <ul>
          <li>Price: {`$ ${price}`}</li>
          <li>Type: {type}</li>
          <li>Origin:{origin}</li>
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
        <p>{`Total: $ ${total}`}</p>
      </div>
    </div>
  )
}
// WAITING FOR REDUX STORE
const mapStateToProps = state => {
  return {
    singleWine: state.product.singleWine
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getSingleWine: id => dispatch(fetchSingleWines(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleWine)
