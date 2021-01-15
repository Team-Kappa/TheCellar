import React from 'react'
import {connect, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

//Material UI
import {FormControl, TextField, Container, Button} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

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
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, error} = props
  const classes = useStyles()
  const dispatch = useDispatch()
  const [state, setState] = React.useState({
    username: '',
    email: '',
    password: '',
    errorName: false,
    errorEmail: false,
    errorPassword: false
  })
  const handleChange = event => {
    setState({...state, [event.target.id]: event.target.value})
  }
  const handleSubmit = event => {
    console.log('hello')
    console.log(state)
    event.preventDefault()
    const formName = name
    const email = state.email
    const password = state.password
    if (formName && email && password) {
      console.log('dispatch')
      dispatch(auth(email, password, formName))
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

  const errorName = state.errorName
  const errorEmail = state.errorEmail
  const errorPassword = state.errorPassword
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
            />
          </FormControl>
          <FormControl required>
            <TextField
              error={errorPassword}
              label="Password"
              id="password"
              value={state.password}
              onChange={handleChange}
              className={classes.formElm}
              helperText="Password field is required"
              variant="outlined"
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
      <a href="/auth/google">{displayName} with Google</a>
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
