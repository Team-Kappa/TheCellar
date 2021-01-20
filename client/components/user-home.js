import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/user'
import {fetchWines, deleteWine} from '../store/product'

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
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%'
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
  const {user} = props
  console.log(props)
  const {admin} = user
  const dispatch = useDispatch()
  const {product} = useSelector(state => state)
  const classes = useStyles()
  useEffect(() => {
    async function getWines() {
      await dispatch(fetchWines())
    }
    getWines()
  }, dispatch)
  console.log('PRODUCT --> ', product)
  const displayWines = wineData => {
    return wineData.map(wine => {
      return (
        <div key={wine.id}>
          <Link to={`/editwine/${wine.id}`}>
            <img className={classes.AllWineImage} src={wine.imageUrl} />
            <h3 className={classes.WineName}>{wine.name}</h3>
          </Link>
          <div className={classes.button}>
            <Button
              type="button"
              variant="contained"
              onClick={() => props.deleteWine(wine)}
            >
              DELETE
            </Button>
          </div>
        </div>
      )
    })
  }

  const notAdminView = () => {
    return (
      <>
        <Container className={classes.title} max-width="lg">
          <h1>{user.username.toUpperCase()} does not have admin access</h1>
        </Container>
        <Container className={classes.button} max-width="lg">
          <Button
            type="button"
            variant="contained"
            onClick={() => props.logout()}
          >
            Logout
          </Button>
        </Container>
      </>
    )
  }
  const adminView = () => {
    return (
      <>
        <Container className={classes.title} max-width="lg">
          <h1>Admin Control for {user.username.toUpperCase()}</h1>
        </Container>
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
        <Button
          type="button"
          variant="contained"
          onClick={() => props.logout()}
        >
          Logout
        </Button>
      </>
    )
  }
  return <div>{admin ? adminView() : notAdminView()}</div>
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    user: state.user,
    wines: state.wines
  }
}
const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logout()),
    deleteWine: wine => dispatch(deleteWine(wine))
  }
}

export default connect(mapState, mapDispatch)(UserHome)
