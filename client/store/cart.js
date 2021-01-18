import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART'
/**
 * INITIAL STATE
 */
const defaultCart = {
  // cart: [],
} //orders?

/**
 * ACTION CREATORS
 */

const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

////THUNK

export const itemToCart = item => dispatch => {
  try {
    //  const res = await axios.get(`/api/wines/${id}`)
    console.log(item)
    dispatch(addToCart(item))
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
    default:
      return state
  }
}
