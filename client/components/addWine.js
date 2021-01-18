import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import {createWine} from '../store/product'
import {connect} from 'react-redux'

const defaultState = {
  name: '',
  price: 0,
  type: null,
  year: '',
  origin: '',
  description: '',
  imageUrl: '/images/defaultwine.png'
}

class AddWine extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }

  handleChange(event) {
    event.persist()
    const {name, value} = event.target
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  handleSubmit(event) {
    try {
      this.props.addWine({...this.state})
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="WINEFORM">
        <form id="wine-form">
          <h1>ADD NEW WINE</h1>
          <form>
            <label htmlFor="name">Wine Name: </label>
            <input name="name" onChange={this.handleChange.bind(this)} />
          </form>

          <form>
            <label htmlFor="price">Price: </label>
            <input name="price" onChange={this.handleChange.bind(this)} />
          </form>

          <form>
            <label htmlFor="type">
              Wine Type:
              <select name="type" onChange={this.handleChange.bind(this)}>
                <option value="choose">Select Wine Type</option>
                <option value="Reds">Reds</option>
                <option value="Whites">Whites</option>
                <option value="Sparkling">Sparkling</option>
                <option value="Rose">Rose</option>
                <option value="Fruit">Fruit</option>
              </select>
            </label>
          </form>

          <form>
            <label htmlFor="year">Year: </label>
            <input name="year" onChange={this.handleChange.bind(this)} />
          </form>

          <form>
            <label htmlFor="origin">Origin: </label>
            <input name="origin" onChange={this.handleChange.bind(this)} />
          </form>

          <form>
            <label htmlFor="description">Description: </label>
            <input name="description" onChange={this.handleChange.bind(this)} />
          </form>

          <form>
            <label htmlFor="imageUrl">Image URL: </label>
            <input name="imageUrl" onChange={this.handleChange.bind(this)} />
          </form>

          <Button onClick={this.handleSubmit.bind(this)}>Add Wine</Button>
          <Button href="/home">Cancel</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWine: newWine => dispatch(createWine(newWine))
  }
}

export default connect(null, mapDispatchToProps)(AddWine)
