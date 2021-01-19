import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonIcon from '@material-ui/icons/Person'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navbar">
    <Link to="/">
      <img className="navbarLogo" src="/images/logowhite.png" alt="" />
    </Link>

    <div className="headerNav">
      <Link style={{textDecoration: 'none'}} to="/wines">
        <div className="headerOption">
          <span className="headerOptionLineOne">Wine</span>
        </div>
      </Link>

      <Link style={{textDecoration: 'none'}} to="/contact">
        <div className="headerOption">
          <span className="headerOptionLineOne">Contact</span>
        </div>
      </Link>

      <Link style={{textDecoration: 'none'}} to="/cart">
        <div className="headerCart">
          <ShoppingCartIcon />
          <span className="headerOptionLineTwo headerCartCount">0</span>
        </div>
      </Link>

      {isLoggedIn ? (
        <Link onClick={() => handleClick()}>
          <div className="headerLogout">
            <ExitToAppIcon />
          </div>
        </Link>
      ) : (
        <Link to="/login">
          <div className="headerProfile">
            <PersonIcon />
          </div>
        </Link>
      )}
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
