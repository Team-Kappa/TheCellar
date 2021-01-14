import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navbar">
    <Link to="/">
      <img className="navbarLogo" src="/images/Wine_logo2.png" alt="" />
    </Link>

    <div className="headerNav">
      <Link to="/wines">
        <div className="headerOption">
          <span className="headerOptionLineOne">Wine</span>
        </div>
      </Link>

      <Link to="/Contact">
        <div className="headerOption">
          <span className="headerOptionLineOne">Contact</span>
        </div>
      </Link>

      <Link to="/SignIn">
        <div className="headerProfile">
          <PersonIcon />
        </div>
      </Link>

      <Link to="/checkout">
        <div className="headerCart">
          <ShoppingCartIcon />
          <span className="headerOptionLineTwo headerCartCount">0</span>
        </div>
      </Link>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
