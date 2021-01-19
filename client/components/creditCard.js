import React from 'react'
import Cards from 'react-credit-cards'

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: ''
  }

  handleInputFocus = e => {
    this.setState({focus: e.target.name})
  }

  handleInputChange = e => {
    const {name, value} = e.target

    this.setState({[name]: value})
  }

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxLength="16"
          />
        </form>
        <form>
          <input
            name="name"
            placeholder="Cardholder Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
        <form>
          <input
            name="expiry"
            placeholder="Exp Date"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxLength="4"
          />
        </form>
        <form>
          <input
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxLength="3"
          />
        </form>
      </div>
    )
  }
}
