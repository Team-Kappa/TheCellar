const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isCompleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  userId: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order
