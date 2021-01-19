import React from 'react'
import {connect, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

//Material UI
import {
  FormControl,
  TextField,
  Container,
  Button,
  Link
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

//Auth form stypes
const useStyles = makeStyles(() => ({
  root: {
    width: '100vh',
    alignContent: 'center',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'Lobster Two, cursive',
    color: '#5b0e2d'
  },
  form: {
    backgroundColor: 'white',
    padding: '5%',
    borderRadius: '5%',
    margin: '5%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  formElm: {
    paddingBottom: '2%'
  },
  button: {
    backgroundColor: '#5b0e2d',
    color: '#ffa781',
    marginBottom: '5%'
  }
}))

/**
 * Auth COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, error} = props
  //Styles class
  const classes = useStyles()
  //Dispatch from redux
  const dispatch = useDispatch()
  //init state
  const [state, setState] = React.useState({
    username: '',
    email: '',
    password: '',
    errorName: false,
    errorEmail: false,
    errorPassword: false
  })

  //handleChange (event) - update state when user types into the field
  const handleChange = event => {
    setState({...state, [event.target.id]: event.target.value})
  }
  //handleSubmit (event) submit the form
  const handleSubmit = event => {
    event.preventDefault()
    const formName = name
    const {email, password, username} = state
    //Validation check
    if (formName && email && password) {
      dispatch(auth(email, password, username, formName))
      setState({
        username: '',
        email: '',
        password: '',
        errorName: false,
        errorEmail: false,
        errorPassword: false
      })
    } else {
      setState({
        ...state,
        errorName: state.username === '',
        errorEmail: state.email === '',
        errorPassword: state.password === ''
      })
      console.log('err', state)
    }
  }
  //set Errors
  const {errorName, errorEmail, errorPassword} = state

  return (
    <Container className={classes.root} maxWidth="xs">
      <h1>{displayName}</h1>
      <Container maxWidth="xs">
        <form className={classes.form} onSubmit={handleSubmit} name={name}>
          <FormControl>
            <TextField
              error={errorName}
              label="Username"
              id="username"
              value={state.username}
              onChange={handleChange}
              className={classes.formElm}
              helperText="Username field is required"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl>
            <TextField
              error={errorEmail}
              label="Email"
              id="email"
              value={state.email}
              onChange={handleChange}
              className={classes.formElm}
              helperText="Email field is required"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl>
            <TextField
              error={errorPassword}
              label="Password"
              id="password"
              value={state.password}
              onChange={handleChange}
              className={classes.formElm}
              helperText="Password field is required"
              variant="outlined"
              required
            />
          </FormControl>
          <Button
            className={classes.button}
            onClick={handleSubmit}
            variant="contained"
          >
            {displayName}
          </Button>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </Container>
      {/* <Link href="/auth/google">{displayName} with Google</Link> */}
      {name === 'login' ? <Link href="/signup">Sign up</Link> : null}
    </Container>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

export const Login = connect(mapLogin)(AuthForm)
export const Signup = connect(mapSignup)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  error: PropTypes.object
}
