import React from 'react'
import {connect} from 'react-redux'
import {fetchWines, fetchSingleWines} from '../store/product'

//Material-UI
import {Container, makeStyles, Link} from '@material-ui/core'

//Homepage Styles
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fcb89b',
    // color: '#5b0e2d',
    color: 'black',
    fontFamily: 'Lobster Two, cursive',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  title: {
    display: 'flex',
    // justifyContent: 'center',
    paddingBottom: '5%',
    fontSize: '50px'
    // textDecoration: 'underline',
  },
  descriptionBox: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  img: {
    // '& img': {
    //   width: '150%',
    // },
    justifyContent: 'center',
    display: 'flex',
    padding: '0 0 5% 0'
  },
  description: {
    margin: 'auto',
    flexBasis: '20vh'
  },
  bannerImg: {
    width: '100%',
    height: '450px',
    objectFit: 'cover'
  },
  bannerFlex: {
    justifyContent: 'center',
    display: 'flex',
    borderBottom: '3px solid black'
  }
}))
/**
 * COMPONENT
 */
export const Homepage = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.bannerFlex}>
        <img
          className={classes.bannerImg}
          src="/images/homepage_banner_logo.jpg"
        />
      </div>

      <Container className={classes.root} maxWidth="sm">
        <Container className={classes.title} maxWidth="sm">
          <h1 className={classes.header1}>GRAPE SHOPPER</h1>
        </Container>
        <Container className={classes.descriptionBox} maxWidth="sm">
          <Container className={classes.img} maxWidth="sm">
            <img src="/images/logoblack.png" alt="Wine_Logo" />
          </Container>
          <Container>
            <p>
              Winegrace is a easy to use ecommerce site to satisfy your needs of
              wine. From reds to sparkling, come and choose from a selection of
              high class wines ready to excite your taste buds. If you want more
              information please <Link href="/contact">contact us</Link>.
            </p>
          </Container>
        </Container>
        <div className="HP_description_container" />
      </Container>
    </>
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
