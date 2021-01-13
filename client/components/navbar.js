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
      <img
        className="navbarLogo"
        src="https://lh3.googleusercontent.com/proxy/KinKtJYZgKHCHrGmNAM9zlbKxS-GvK6GV2_0n6OS6uATd_R6YEwVj3LAkd7HgxZcrq6xzDNtjotty_pQskBHfFIqlz5Sr5Z-ca_v_-s-SSGo1Ggj1PfqRWoIsfeVa0BKCw"
        alt=""
      />
    </Link>

    <div className="headerNav">
      <Link to="/AllWines">
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

      <Link to="/Checkout">
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
