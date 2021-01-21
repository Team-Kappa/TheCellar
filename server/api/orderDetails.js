const router = require('express').Router()
const {OrderDetails, Order, Product} = require('../db/models')

//GET ALL ORDER DETAILS
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const orderDetails = await OrderDetails.findAll()
      res.status(200).json(orderDetails)
    } else {
      res.status(401).json('User does not have get orderDetails access.')
    }
  } catch (err) {
    next(err)
  }
})
//GETTING USER ID & SPECIFIED ORDER ID
router.get('/:userId/', async (req, res, next) => {
  try {
    if (req.user) {
      const orders = await Order.findOne({
        where: {
          userId: req.params.userId,
          isCompleted: false
        },
        include: [Product]
      })
      const data = await orders.getProducts()
      res.json(orders)
    } else {
      res.status(401).json('User does not have get orderDetails access.')
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (req.user) {
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
    } else {
      res.status(401).json('User does not have post orderDetails access.')
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:userId/', async (req, res, next) => {
  try {
    if (req.user) {
      const modifyOrder = await OrderDetails.findOne({
        where: {
          userId: req.params.userId,
          isCompleted: false
        },
        include: [Product]
      })
      const data = await modifyOrder.getProducts()
      res.send(await modifyOrder.update(req.body))
    } else {
      res.status(401).json('User does not have put orderDetails access.')
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    if (req.user) {
      let result = await OrderDetails.destroy({
        where: {
          orderId: req.body.orderId,
          productId: req.body.productId
        }
      })
      res.json(result)
    } else {
      res.status(401).json('User does not have delete orderDetails access.')
    }
  } catch (err) {
    next(err)
  }
})
module.exports = router
