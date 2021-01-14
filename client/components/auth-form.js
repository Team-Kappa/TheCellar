import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
//Material UI
import {
  FormControl,
  TextField,
  Container,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core'
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
    margin: '5%'
  }
}))

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  const classes = useStyles()
  const [state, setState] = React.useState({
    personName: '',
    email: '',
    password: ''
  })
  const handleChange = event => {
    setState({...state, [event.target.id]: event.target.value})
  }
  const errorName = state.personName.length === 0
  const errorPassword = state.password.length === 0
  const errorEmail = state.email.length === 0
  return (
    <Container className={classes.root} maxWidth="xs">
      <h1>{displayName}</h1>
      <Container maxWidth="xs">
        <form className={classes.form} onSubmit={handleSubmit} name={name}>
          <FormControl required error={errorName}>
            <TextField
              label="Name"
              id="personName"
              value={state.personName}
              onChange={handleChange}
              helperText="Name field is required"
              variant="outlined"
            />
          </FormControl>
          <FormControl required error={errorPassword}>
            <TextField
              label="Password"
              id="password"
              value={state.password}
              onChange={handleChange}
              helperText="Password field is required"
              variant="outlined"
            />
          </FormControl>
          <FormControl required error={errorEmail}>
            <TextField
              label="Email"
              id="email"
              value={state.email}
              onChange={handleChange}
              helperText="Email field is required"
              variant="outlined"
            />
          </FormControl>
          <div>
            <button type="submit">{displayName}</button>
          </div>
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

const mapDispatch = dispatch => {
  return {
    handleSubmit: evt => {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
