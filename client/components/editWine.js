import React, {useEffect} from 'react'
import {fetchSingleWines, updateWine} from '../store/product'

//Material UI
import {
  FormControl,
  TextField,
  Container,
  Button,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'

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
  title: {
    marginBottom: '5%'
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
  selectElm: {
    paddingBottom: '2%',
    marginLeft: '4%'
  },
  button: {
    backgroundColor: '#5b0e2d',
    color: '#ffa781',
    marginBottom: '5%'
  }
}))

const EditWine = props => {
  const [state, setState] = React.useState({
    wineId: props.match.params.wineId,
    name: '',
    price: '',
    type: '',
    year: '',
    origin: '',
    description: '',
    imageUrl: ''
  })
  //Prep the tools
  const classes = useStyles()
  const dispatch = useDispatch()
  const {product} = useSelector(store => store)
  const wineInfo = product.singleWine

  //Fetch data for single wine
  useEffect(
    () => {
      async function getWine() {
        if (state.wineId) await dispatch(fetchSingleWines(state.wineId))
      }
      getWine()
    },
    [dispatch]
  )

  useEffect(
    () => {
      function setWine(wines) {
        if (wines) {
          setState({
            ...state,
            name: wines.name,
            price: wines.price,
            type: wines.type,
            year: wines.year,
            origin: wines.origin,
            description: wines.description,
            imageUrl: wines.imageUrl
          })
        }
      }
      setWine(wineInfo)
    },
    [wineInfo]
  )

  //handle change function - Updating textfield
  const handleChange = event => {
    setState({...state, [event.target.id]: event.target.value})
  }

  const handleDropdownChange = event => {
    setState({...state, type: event.target.value})
  }

  //handle submit function - Submiting form
  const handleSubmit = () => {
    dispatch(updateWine(state))
  }

  //Form template
  const form = () => {
    return (
      <form className={classes.form} onSubmit={handleSubmit} name={name}>
        <h1 className={classes.title}>Edit {wineInfo.name}</h1>
        <FormControl required>
          <TextField
            error={state.errorName}
            label="Wine Name"
            id="name"
            value={state.name}
            onChange={handleChange}
            className={classes.formElm}
            helperText="Wine Name field is required"
            variant="outlined"
            required
          />
        </FormControl>
        <FormControl required>
          <TextField
            error={state.errorEmail}
            label="Price"
            id="price"
            value={state.price}
            onChange={handleChange}
            className={classes.formElm}
            helperText="Price field is required"
            variant="outlined"
            required
          />
        </FormControl>
        <FormControl required>
          <Select
            error={state.errorName}
            id="type"
            label="Type"
            value={state.type}
            onChange={handleDropdownChange}
            variant="outlined"
            required
          >
            <MenuItem value="Reds">Red</MenuItem>
            <MenuItem value="Whites">White</MenuItem>
            <MenuItem value="Sparkling">Sparkling</MenuItem>
            <MenuItem value="Rose">Rose</MenuItem>
            <MenuItem value="Fruit">Fruit</MenuItem>
          </Select>
          <FormHelperText className={classes.selectElm}>
            Type field is required
          </FormHelperText>
        </FormControl>
        <FormControl required>
          <TextField
            error={state.errorPassword}
            label="Year"
            id="year"
            value={state.year}
            onChange={handleChange}
            className={classes.formElm}
            helperText="Year field is required"
            variant="outlined"
            required
          />
        </FormControl>

        <FormControl required>
          <TextField
            error={state.errorName}
            label="Origin"
            id="origin"
            value={state.origin}
            onChange={handleChange}
            className={classes.formElm}
            helperText="Origin field is required"
            variant="outlined"
            required
          />
        </FormControl>
        <FormControl required>
          <TextField
            error={state.errorName}
            label="Description"
            id="description"
            value={state.description}
            onChange={handleChange}
            className={classes.formElm}
            helperText="Description field is required"
            variant="outlined"
            required
          />
        </FormControl>
        <FormControl required>
          <TextField
            error={state.errorName}
            label="Image URL"
            id="imageUrl"
            value={
              state.imageUrl == '/images/defaultwine.png' ? '' : state.imageUrl
            }
            onChange={handleChange}
            className={classes.formElm}
            placeholder="/images/defaultwine.png"
            helperText="ImageUrl field is required"
            variant="outlined"
            required
          />
        </FormControl>

        <Button
          className={classes.button}
          onClick={handleSubmit}
          variant="contained"
        >
          Update
        </Button>
        <Button className={classes.button} href="/admin" variant="contained">
          Cancel
        </Button>
        {/* {error && error.response && <div> {error.response.data} </div>} */}
      </form>
    )
  }

  //set Errors
  const {errorName, errorEmail, errorPassword} = state
  return <Container maxWidth="sm">{wineInfo ? form() : null}</Container>
}

export default EditWine
