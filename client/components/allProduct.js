import React from 'react'
import {connect} from 'react-redux'
import {fetchWines} from '../store/product'
import {Link} from 'react-router-dom'

export class AllProduct extends React.Component {
  componentDidMount() {
    this.props.getWines()
  }

  render() {
    const wines = this.props.wines ? this.props.wines : []

    console.log('this.props ->', this.props)
    // console.log('this.props --->', this.props)
    // console.log('wines ===>', wines)

    return (
      <div>
        <h1>All Wines Page</h1>

        <button type="button">Red</button>
        <button type="button">White</button>
        <button type="button">Sparkling</button>
        <button type="button">Orange</button>
        <button type="button">Neon</button>

        <div className="wines-list">
          <h2>List of wines here</h2>
          {wines.map(wine => {
            return (
              <div key={wine.id}>
                <img style={{height: 100}} src={wine.imageUrl} />
                <Link to={`/wines/${wine.id}`}>
                  <h2>{wine.name}</h2>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  console.log('map state-->', state)
  return {
    wines: state.product.wines
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWines: () => dispatch(fetchWines())
  }
}

export default connect(mapState, mapDispatchToProps)(AllProduct)
