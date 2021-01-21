import React from 'react'

//Material UI
import {
  FormControl,
  TextField,
  Container,
  Button,
  Link
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

//404 form styles
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
const NotFound = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="xs">
      <h1>404 - Not Found!</h1>
      <p>
        Sorry the page you are looking for is not here please go back to the{' '}
        <Link href="/">Homepage</Link>
      </p>
    </Container>
  )
}

export default NotFound
