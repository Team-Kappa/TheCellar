import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  Homepage,
  AllProduct,
  SingleWine,
  Cart,
  Checkout,
  ContactUs,
  AddWine,
  NotFound,
  EditWine
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isAdmin} = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/wines" component={AllProduct} />
        <Route exact path="/wines/:wineId" component={SingleWine} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact" component={ContactUs} />
        {isAdmin && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/admin" component={UserHome} />
            <Route exact path="/addwine" component={AddWine} />
            <Route exact path="/editwine/:wineId" component={EditWine} />
          </Switch>
        )}
        <Route component={NotFound} />
        {/* Displays our Login component as a fallback */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isAdmin: !!state.user.admin,
    isLoggedIn: !!state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
