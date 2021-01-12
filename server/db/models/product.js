const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },

  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },

  year: {
    type: Sequelize.STRING,
    allowNull: false
  },

  origin: {
    type: Sequelize.TEXT,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT
  },

  type: {
    type: Sequelize.ENUM('red', 'white', 'sparkling', 'orange', 'neon')
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: '/images/defaultwine.png'
  },

  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = Product
