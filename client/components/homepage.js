import React from 'react'
import {connect} from 'react-redux'
import {fetchWines, fetchSingleWines} from '../store/product'

/**
 * COMPONENT
 */
export class Homepage extends React.Component {
  render() {
    return (
      <div className="HPContainer">
        <div className="HP_title_container">
          <h1>Wine Shopper</h1>
        </div>
        <div className="HP_description_container">
          <div className="HP_Image">
            <img src="/images/Wine_logo2.png" />
          </div>
          <div className="HP_description">
            <p>
              Wine and more. Come and choose from a selection of high class
              wines meant to excite your taste buds.{' '}
            </p>
          </div>
        </div>
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
