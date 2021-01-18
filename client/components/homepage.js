import React, {useEffect, useState} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {fetchWines, fetchSingleWines} from '../store/product'
import {me} from '../store/user'
import axios from 'axios'
//Material-UI
import {Container, makeStyles} from '@material-ui/core'

//Homepage Styles
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffa781',
    color: '#5b0e2d',
    fontFamily: 'Lobster Two, cursive',
    paddingTop: '5%'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '5%'
  },
  descriptionBox: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  img: {
    '& img': {
      width: '120px'
    },
    justifyContent: 'center',
    display: 'flex',
    padding: '0 0 5% 0'
  },

  description: {
    margin: 'auto',
    flexBasis: '20vh'
  }
}))
/**
 * COMPONENT
 */
export const Homepage = props => {
  const classes = useStyles()
  const [state, setState] = useState({
    userID: 0
  })

  console.count(props, state)

  //Hooks
  // const info = useSelector(state => state)
  // console.log("info", info)
  const dispatch = useDispatch()

  useEffect(
    () => {
      console.log('hello Effect')
      //hooks
      async function getUser() {
        await dispatch(me())
      }

      getUser()
    },
    [dispatch]
  )

  const handleClick = async () => {
    // console.log('hello: ', props.state.user.id)
    // setState({...state, userID: props.state.user.id})
    // console.log("setState!: ", state)
    console.log('Clicked')
    console.log('id: ', props.state.user.id)
    const id = props.state.user.id
    const res = id
      ? await axios.post(`/api/order/`, {
          userId: props.state.user.id,
          isCompleted: false
        })
      : undefined
    console.log('hello', res)
  }

  return (
    <Container className={classes.root} maxWidth="sm">
      <Container className={classes.title} maxWidth="sm">
        <h1>Wine Shopper</h1>
      </Container>
      <Container className={classes.descriptionBox} maxWidth="sm">
        <Container className={classes.img} maxWidth="sm">
          <img src="/images/Wine_logo2.png" />
        </Container>
        <Container>
          <p>
            Wine and more. Come and choose from a selection of high class wines
            meant to excite your taste buds.{' '}
          </p>
          <button type="button" onClick={handleClick}>
            Hello
          </button>
        </Container>
      </Container>
      <div className="HP_description_container" />
    </Container>
  )
}

/**
 * CONTAINER
 */
//Class component and hooks
const mapState = state => {
  return {
    wines: state.product.wines,
    singleWine: state.product.singleWine,
    state: state
  }
}
const mapDispatch = dispatch => {
  return {
    getWines: () => dispatch(fetchWines()),
    getSingleWine: id => dispatch(fetchSingleWines(id))
  }
}

export default connect(mapState, mapDispatch)(Homepage)
