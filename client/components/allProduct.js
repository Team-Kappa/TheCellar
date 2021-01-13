import React from 'react'
import {connect} from 'react-redux'
import {fetchWines} from '../store/product'

export class AllProduct extends React.Component {
  componentDidMount() {
    this.props.getWines()
  }

  render() {
    const wines = this.props.product
    console.log('this.props ->', this.props)
    // console.log('this.props --->', this.props)
    console.log('wines ===>', wines)

    return (
      <div>
        <h1>All Wines Page</h1>
        <div className="All_button_container">
          <button type="button">Red</button>
          <button type="button">White</button>
          <button type="button">Sparkling</button>
          <button type="button">Orange</button>
          <button type="button">Neon</button>
        </div>

        <h2>List of wines here</h2>
        <div className="All_Container">
          {wines.map(wine => {
            return (
              <div key={wine.id}>
                <img className="All_Image" src={wine.imageUrl} />
                <h2>{wine.name}</h2>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWines: () => dispatch(fetchWines())
  }
}

export default connect(mapState, mapDispatchToProps)(AllProduct)
