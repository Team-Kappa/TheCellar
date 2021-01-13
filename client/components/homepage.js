import React from 'react'
import {connect} from 'react-redux'
import {fetchWines, fetchSingleWines} from '../store/product'

/**
 * COMPONENT
 */
export class Homepage extends React.Component {
  componentDidMount() {
    console.log('heloo')
    this.props.getWines()
    this.props.getSingleWine(1)
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
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
