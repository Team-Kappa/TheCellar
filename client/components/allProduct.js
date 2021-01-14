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

    return (
      <div>
        <img
          className="All_Top_Image"
          src="https://d84potgbojizh.cloudfront.net/wp-content/uploads/2019/09/Ultimate-Guide-to-Host-Best-Wine-Cheese-Party-Hero.png"
        />

        <h1>OUR WINES</h1>
        <div className="All_button_container">
          <button type="button">Red</button>
          <button type="button">White</button>
          <button type="button">Sparkling</button>
          <button type="button">Orange</button>
          <button type="button">Neon</button>
        </div>

        <div className="All_Container">
          {wines.map(wine => {
            return (
              <div key={wine.id}>
                <Link to={`/wines/${wine.id}`}>
                  <img className="All_Wine_Image" src={wine.imageUrl} />
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
