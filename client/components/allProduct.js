import React from 'react'
import {connect} from 'react-redux'
import {fetchWines} from '../store/product'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

export class AllProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      wineData: []
    }
  }

  componentDidMount() {
    this.props.getWines()
  }

  wineButtonClickHandler = (buttonName, rawWineData) => {
    const filteredWineData = rawWineData.filter(
      wineData => wineData.type.toUpperCase() === buttonName
    )

    this.setState({
      wineData: filteredWineData
    })
  }

  displayWines = wineData => {
    return wineData.map(wine => {
      return (
        <div key={wine.id}>
          <Link to={`/wines/${wine.id}`}>
            <img className="All_Wine_Image" src={wine.imageUrl} />
            <h3 className="All_WineName">{wine.name}</h3>
          </Link>
        </div>
      )
    })
  }

  render() {
    const wines = this.props.wines ? this.props.wines : []
    const buttonNames = ['ALL', 'REDS', 'WHITES', 'SPARKLING', 'ROSE', 'FRUIT']

    if (wines.length > 0 && this.state.wineData.length === 0) {
      this.setState({
        wineData: wines
      })
    }

    return (
      <div>
        <img
          className="All_Top_Image"
          src="/images/allProductPageSmall.png"
          alt="Null"
        />

        <h1 className="All_Title">OUR WINES</h1>
        <div className="All_Horizontal">
          <hr align="center" />
        </div>
        <div className="All_Button">
          {buttonNames.map(singleButton => {
            return (
              <Button
                size="large"
                onClick={() => this.wineButtonClickHandler(singleButton, wines)}
                key={`${singleButton}`}
              >
                {singleButton}
              </Button>
            )
          })}
        </div>

        <div className="All_Container">
          {this.displayWines(this.state.wineData)}
        </div>
      </div>
    )
  }
}

const mapState = state => {
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
