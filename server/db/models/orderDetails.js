const Sequelize = require('sequelize')
const db = require('../db')

const OrderDetails = db.define('orderDetails', {
  orderId: {
    type: Sequelize.INTEGER
  },
  productId: {
    type: Sequelize.INTEGER
  },
  productQuantity: {
    type: Sequelize.INTEGER
  },
  productPrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderDetails
