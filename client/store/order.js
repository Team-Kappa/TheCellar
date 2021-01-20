import axios from 'axios'

const GET_ORDER = 'GET_ORDER'

//initial state
const defaultOrder = []

//action creator
const getOrder = order => ({
  type: GET_ORDER,
  order
})

//THUNK

export const fetchOrder = order => async dispatch => {
  try {
    dispatch(getOrder(order))
  } catch (err) {
    console.log(err)
  }
}

//Reducer
export default function(state = defaultOrder, action) {
  switch (action.type) {
    case GET_ORDER:
      return {...state, orderInfo: action.order}
    default:
      return state
  }
}
