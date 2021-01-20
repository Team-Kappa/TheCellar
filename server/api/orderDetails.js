const router = require('express').Router()
const {OrderDetails, Order, Product} = require('../db/models')

//GET ALL ORDER DETAILS
router.get('/', async (req, res, next) => {
  try {
    const orderDetails = await OrderDetails.findAll()
    res.status(200).json(orderDetails)
  } catch (err) {
    next(err)
  }
})
//GETTING USER ID & SPECIFIED ORDER ID
router.get('/:userId', async (req, res, next) => {
  try {
    const orders = await Order.findOne({
      where: {
        userId: req.params.userId,
        // id: req.params.orderId,
        isCompleted: false
      },
      include: [Product]
    })
    const data = await orders.getProducts()
    // console.log('Object.keys', Object.keys(order.prototype))
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let order = await Order.findOrCreate({
      where: {
        userId: req.body.userId,
        isCompleted: false
      },
      include: [Product]
    })
    const product = await Product.findByPk(req.body.productId)

    await product.addOrder(order[0], {
      through: {
        productQuantity: req.body.productQuantity,
        productPrice: req.body.productPrice
      }
    })
  } catch (err) {
    next(err)
  }
})
module.exports = router
