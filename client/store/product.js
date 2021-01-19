import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_WINE = 'SET_WINE'
const SET_SINGLEWINE = 'SET_SINGLEWINE'
const ADD_WINE = 'ADD_WINE'
const DELETE_WINE = 'DELETE_WINE'

/**
 * INITIAL STATE
 */
const defaultWine = {}

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

export const createWine = newWine => async dispatch => {
  try {
    const res = await axios.post(`/api/wines`, newWine)
    dispatch(fetchWines(res.data || defaultWine))
  } catch (error) {
    console.log(error)
  }
}

export const deleteWine = wine => async dispatch => {
  try {
    await axios.delete(`/api/wines/${wine.id}`)
    const res = await axios.get('/api/wines')
    dispatch(setWines(res.data))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultWine, action) {
  switch (action.type) {
    case SET_WINE:
      return {...state, wines: action.wines}
    case SET_SINGLEWINE:
      return {...state, singleWine: action.singleWine}
    case ADD_WINE:
      return {...state, newWine: action.newWine}
    case DELETE_WINE:
      return state.filter(wine => wine.id !== action.wine.id)

    default:
      return state
  }
}
