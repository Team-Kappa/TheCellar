import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_WINE = 'SET_WINE'
const SET_SINGLEWINE = 'SET_SINGLEWINE'
/**
 * INITIAL STATE
 */
const defaultWine = []

/**
 * ACTION CREATORS
 */
//Set all wine
const setWines = wines => ({
  type: SET_WINE,
  wines
})
//Set the Single Wine
const setSingleWine = singleWine => ({
  type: SET_SINGLEWINE,
  singleWine
})

/**
 * THUNK CREATORS
 */
export const fetchWines = () => async dispatch => {
  try {
    const res = await axios.get('/api/wines')
    dispatch(setWines(res.data || defaultWine))
  } catch (err) {
    console.log(err)
  }
}
export const fetchSingleWines = id => async dispatch => {
  try {
    const res = await axios.get(`/api/wines/${id}`)
    dispatch(setSingleWine(res.data || defaultWine))
  } catch (err) {
    console.log(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultWine, action) {
  switch (action.type) {
    case SET_WINE:
      return action.wines
    case SET_SINGLEWINE:
      return action.singleWine
    default:
      return state
  }
}
