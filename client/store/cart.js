import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART'
/**
 * INITIAL STATE
 */
const defaultCart = []

/**
 * ACTION CREATORS
 */
//add to cart
// const addToCart = cart => ({
//   type: ADD_TO_CART,
//   cart
// })

// //THUNK

// export const addToCart = id => async dispatch => {
//   try {
//     const res = await axios.get(`/api/wines/${id}`)
//     dispatch(setSingleWine(res.data || defaultWine))
//   } catch (err) {
//     console.log(err)
//   }
// }
/**
 * REDUCER
 */
export default function(state = defaultCart, action) {
  console.log(action)
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.item]
    default:
      return state
  }
}
