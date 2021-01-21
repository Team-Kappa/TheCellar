import React, {useEffect, useState} from 'react'
import {fetchWines} from '../store/product'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {connect, useDispatch} from 'react-redux'

const AllProduct = props => {
  const {wines} = props
  const dispatch = useDispatch()
  const [currentWineList, setCurrentWineList] = useState([])
  const buttonNames = ['ALL', 'REDS', 'WHITES', 'SPARKLING', 'ROSE', 'FRUIT']

  useEffect(
    () => {
      const getWines = async () => {
        try {
          await dispatch(fetchWines())
        } catch (err) {
          console.error(err)
        }
      }
      getWines()
    },
    [wines === undefined]
  )

  useEffect(
    () => {
      setCurrentWineList(props.wines)
    },
    [!!wines && wines.length !== 0]
  )

  const displayWines = wineData => {
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

  const wineCategoryClickHandler = (buttonName, wineList) => {
    const filteredWineList = wineList.filter(
      wineData => wineData.type.toUpperCase() === buttonName
    )
    if (buttonName !== 'ALL') {
      setCurrentWineList(filteredWineList)
    } else {
      setCurrentWineList(wineList)
    }
  }

  const displayButtons = categoryButtons => {
    return categoryButtons.map(singleButton => {
      return (
        <Button
          size="large"
          onClick={() => wineCategoryClickHandler(singleButton, wines)}
          key={`${singleButton}`}
        >
          {singleButton}
        </Button>
      )
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
      <div className="All_Button">{displayButtons(buttonNames)}</div>

      <div className="All_Container">
        {currentWineList && displayWines(currentWineList)}
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    wines: state.product.wines
  }
}

export default connect(mapState)(AllProduct)
