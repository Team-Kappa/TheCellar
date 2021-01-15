import React from 'react'
import {connect} from 'react-redux'
import {fetchWines, fetchSingleWines} from '../store/product'

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
export const Homepage = () => {
  const classes = useStyles()
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
        </Container>
      </Container>
      <div className="HP_description_container" />
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    wines: state.product.wines,
    singleWine: state.product.singleWine
  }
}
const mapDispatch = dispatch => {
  return {
    getWines: () => dispatch(fetchWines()),
    getSingleWine: id => dispatch(fetchSingleWines(id))
  }
}

export default connect(mapState, mapDispatch)(Homepage)
