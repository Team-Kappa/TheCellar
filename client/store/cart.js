import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART_INFO = 'GET_CART_INFO'
/**
 * INITIAL STATE
 */
const defaultCart = {
  cart: []
} //orders?

/**
 * ACTION CREATORS
 */

const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

const getCartInfo = id => ({
  type: GET_CART_INFO,
  id
})
////THUNK

export const itemToToCart = item => async dispatch => {
  try {
    //  const res = await axios.get(`/api/wines/${id}`)
    dispatch(addToCart(item))
  } catch (err) {
    console.log(err)
  }
}

export const cartInfo = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/orderDetails/${userId}`)
    dispatch(getCartInfo(userId))
  } catch (err) {
    console.log(err)
  }
}
/**
 * REDUCER
 */
export default function(state = defaultCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.item]}
    case GET_CART_INFO:
      return {...state, orderdetails: action.id}
    default:
      return state
  }
}
