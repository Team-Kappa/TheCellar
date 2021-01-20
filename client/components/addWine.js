import React from 'react'
import {createWine} from '../store/product'
import {useDispatch} from 'react-redux'

//Material UI
import {FormControl, TextField, Container, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '48vh',
    alignContent: 'center',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'Lobster Two, cursive',
    color: '#5b0e2d'
  },
  title: {
    alignContent: 'center'
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
    marginBottom: '2%',
    marginTop: '2%'
    // justifyContent: 'center',
    // alignContent: 'center',
    // width: '30vh'
  }
})

const AddWine = () => {
  const dispatch = useDispatch()
  const [state, setState] = React.useState({
    name: '',
    price: 0,
    type: '',
    year: 0,
    origin: '',
    description: '',
    imageUrl: '/images/defaultwine.png',
    errorName: false,
    errorPrice: false,
    errorType: false,
    errorYear: false
  })

  const handleChange = event => {
    event.persist()
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  // const handleSubmit = () => {
  //   try {
  //     dispatch(createWine({...state}))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleSubmit = () => {
    const name = state.name
    const price = state.price
    const type = state.type
    const year = state.year
    if (name && price && type && year) {
      dispatch(createWine({...state}))
      setState({
        name: '',
        price: 0,
        type: '',
        year: 0,
        origin: '',
        description: '',
        imageUrl: '/images/defaultwine.png',
        errorName: false,
        errorPrice: false,
        errorType: false,
        errorYear: false
      })
    } else {
      setState({
        ...state,
        errorName: state.name === '',
        errorPrice: state.price === 0,
        errorType: state.type === '',
        errorYear: state.year === 0
      })
    }
  }
  const errorName = state.errorName
  const errorPrice = state.errorPrice
  const errorType = state.errorType
  const errorYear = state.errorYear
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <h1 className="AddWine_Title">ADD NEW WINE</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            error={errorName}
            label="Wine Name"
            id="name"
            name="name"
            onChange={handleChange}
            className={classes.formElm}
            helperText="Wine Name field is required"
            variant="outlined"
            required
          />
        </FormControl>

        <FormControl>
          <TextField
            error={errorPrice}
            label="Price"
            id="price"
            name="price"
            onChange={handleChange}
            className={classes.formElm}
            helperText="Price field is required"
            variant="outlined"
            required
          />
        </FormControl>

        <FormControl>
          <TextField
            error={errorType}
            label="Wine Type"
            id="type"
            name="type"
            onChange={handleChange}
            className={classes.formElm}
            helperText="Wine Type field is required"
            variant="outlined"
            required
            multiline
            placeholder="Reds, Whites, Sparkling, Rose, Fruit"
          />
        </FormControl>

        <FormControl>
          <TextField
            error={errorYear}
            label="Year"
            id="year"
            name="year"
            onChange={handleChange}
            className={classes.formElm}
            helperText="Year field is required"
            variant="outlined"
            required
          />
        </FormControl>

        <FormControl>
          <TextField
            label="Origin"
            id="origin"
            name="origin"
            onChange={handleChange}
            className={classes.formElm}
            variant="outlined"
          />
        </FormControl>

        <FormControl>
          <TextField
            label="Description"
            id="description"
            name="description"
            onChange={handleChange}
            className={classes.formElm}
            variant="outlined"
          />
        </FormControl>

        <FormControl>
          <TextField
            label="Image URL"
            id="imageUrl"
            name="imageUrl"
            onChange={handleChange}
            className={classes.formElm}
            variant="outlined"
            multiline
            placeholder="/images/defaultwine.png"
          />
        </FormControl>
        <Button className={classes.button} onClick={handleSubmit}>
          Add Wine
        </Button>
        <Button className={classes.button} href="/admin">
          Cancel
        </Button>
      </form>
    </Container>
  )
}

export default AddWine
