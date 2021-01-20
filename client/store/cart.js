import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART'
const POST_INFO = 'POST_INFO'
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

const postCartInfo = cart => ({
  type: POST_INFO,
  cart
})
////THUNK

export const itemToCart = item => async dispatch => {
  try {
    //  const res = await axios.get(`/api/wines/${id}`)
    dispatch(addToCart(item))
  } catch (err) {
    console.log(err)
  }
}

export const cartInfo = userId => async dispatch => {
  console.log('Backend cartinfo', userId)
  try {
    const res = await axios.get(`/api/orderDetails/${userId}`)
    dispatch(addToCart(res.data))
  } catch (err) {
    console.log(err)
  }
}

// export const postInfo =(info) => (dispatch)
//   => {
//   try {
//     const res = await axios.post(`/api/orderDetails/`, {
//             userId: req.body.user.id,
//             productId: req.body.wineId,
//             productQuantity: req.body.quantity,
//             productPrice: req.body.price,
//     })
//     dispatch(postCartInfo(res.data))
//   } catch (err) {
//     console.log(err)
//   }
//  }

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
