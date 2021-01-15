import {connect} from 'react-redux'
import React from 'react'

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}

const mapState = state => {}

const mapDispatchToProps = dispatch => {}

export default connect(mapState, mapDispatchToProps)(Checkout)
