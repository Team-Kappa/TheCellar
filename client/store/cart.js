import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART'
const POST_INFO = 'POST_INFO'
const DELETE_ITEM = 'DELETE_ITEM'
/**
 * INITIAL STATE
 */
const defaultCart = {}

/**
 * ACTION CREATORS
 */

const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

const deleteItem = id => ({
  type: DELETE_ITEM,
  id
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
  try {
    const res = await axios.get(`/api/orderDetails/${userId}`)
    dispatch(addToCart(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const postInfo = info => async dispatch => {
  try {
    const res = await axios.post(`/api/orderDetails/`, {
      userId: info.userId,
      productId: info.wineId,
      productQuantity: info.quantity,
      productPrice: info.price
    })
    dispatch(addToCart(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const deleteAnItem = info => async dispatch => {
  try {
    await axios.delete(`/api/orderDetails/`, {
      userId: info.userId,
      orderId: info.id,
      productId: info.wineId
    })
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
      return action.item
    default:
      return state
  }
}
