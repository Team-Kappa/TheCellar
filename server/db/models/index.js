const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const OrderDetails = require('./orderDetails')
const db = require('../db')

//ONE-TO-ONE
User.belongsTo(Order)
Order.hasOne(User)

//MANY-TO-MANY
Order.belongsToMany(Product, {through: 'orderDetails'})
Product.belongsToMany(Order, {through: 'orderDetails'})

//one to many relationship between order and user
//many to many relationhip between product and order == order details

//refund? - refer back to the order number
//multiple order on one product

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Order,
  OrderDetails
}
