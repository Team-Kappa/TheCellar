import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/user'
import {fetchWines} from '../store/product'

//Material ui
import {Container, makeStyles, Button} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fcb89b',
    color: '#5b0e2d',
    fontFamily: 'Lobster Two, cursive',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  allWines: {
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  },
  AllWineImage: {
    height: '400px',
    marginLeft: '75px',
    marginRight: '75px',
    marginTop: '30px'
  },
  WineName: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '100%',
    marginTop: '10%',
    marginBottom: '20%'
  },
  addWine: {
    height: 'auto',
    margin: '5%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  addWineButton: {
    margin: 'auto'
  }
}))
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const dispatch = useDispatch()
  const {product, user} = useSelector(state => state)
  const classes = useStyles()
  useEffect(() => {
    async function getWines() {
      await dispatch(fetchWines())
    }
    getWines()
  }, dispatch)

  const displayWines = wineData => {
    return wineData.map(wine => {
      return (
        <div key={wine.id}>
          <Link to={`/wines/${wine.id}`}>
            <img className={classes.AllWineImage} src={wine.imageUrl} />
            <h3 className={classes.WineName}>{wine.name}</h3>
          </Link>
        </div>
      )
    })
  }
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <Container className={classes.allWines} max-width="lg">
        <div className={classes.addWine} key="addWine">
          <Button
            href="/addwine"
            className={classes.addWineButton}
            variant="contained"
          >
            + Add wine
          </Button>
        </div>
        {product.wines ? displayWines(product.wines) : null}
      </Container>
      <button type="button" onClick={() => props.logout()}>
        Logout
      </button>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}
const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapState, mapDispatch)(UserHome)
