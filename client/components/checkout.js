import {connect} from 'react-redux'
import React from 'react'
import PaymentForm from './creditCard'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  heading: {
    fontSize: theme.typography.pxToRem(22)
  }
})

export class Checkout extends React.Component {
  state = {
    expanded: null
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    })
  }

  render() {
    const {expanded} = this.state
    const {classes} = this.props

    return (
      <div className="CHECKOUT_Main_Container">
        <div className="CHECKOUT_Container">
          <div className="CHECKOUT_Title">
            <h1>CHECKOUT</h1>
          </div>
          <div className="CHECKOUT_Panel">
            <ExpansionPanel
              expanded={expanded === 'panel1'}
              onChange={this.handleChange('panel1')}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  1. PERSONAL DETAIL
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <form className={classes.root}>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="FIRST NAME"
                      multiline
                      margin="normal"
                      className={classes.textField}
                      width="100%"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="LAST NAME"
                      multiline
                      className={classes.textField}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="EMAIL"
                      multiline
                      className={classes.textField}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="DATE OF BIRTH"
                      multiline
                      className={classes.textField}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="ADDRESS"
                      multiline
                      className={classes.textField}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="CITY"
                      multiline
                      className={classes.textField}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="STATE"
                      multiline
                      className={classes.textField}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="ZIP CODE"
                      multiline
                      className={classes.textField}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="PHONE NUMBER"
                      multiline
                      className={classes.textField}
                    />
                  </div>
                </form>
              </ExpansionPanelDetails>
              <Button variant="outlined">CONTINUE</Button>
            </ExpansionPanel>

            <ExpansionPanel
              expanded={expanded === 'panel2'}
              onChange={this.handleChange('panel2')}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  2. SHIPPING ADDRESS
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <form className={classes.root}>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="FIRST NAME"
                      multiline
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="LAST NAME"
                      multiline
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="ADDRESS"
                      multiline
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="CITY"
                      multiline
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="STATE"
                      multiline
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="ZIP CODE"
                      multiline
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="PHONE NUMBER"
                      multiline
                    />
                  </div>
                </form>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel
              expanded={expanded === 'panel3'}
              onChange={this.handleChange('panel3')}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  3. PAYMENT METHOD
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div>
                  <Typography>ADD A PAYMENT METHOD</Typography>
                </div>
                <div>
                  <PaymentForm />
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel
              expanded={expanded === 'panel4'}
              onChange={this.handleChange('panel4')}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  4. REVIEW ITEMS AND SHIPPING{' '}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className="CHECKOUT_Summary_Box">
                  <div className="CHECKOUT_OrderSummary">
                    <h2>Order Summary</h2>
                    <div>Item Name: Quantity: Order Total:</div>
                    <Button>Place Your Order</Button>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </div>
    )
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Checkout)

// const mapState = (state) => {}

// const mapDispatchToProps = (dispatch) => {}

// export default connect(mapState, mapDispatchToProps)(Checkout)
