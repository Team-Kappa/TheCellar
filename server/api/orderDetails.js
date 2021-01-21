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
router.get('/:userId/', async (req, res, next) => {
  try {
    const orders = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      },
      include: [Product]
    })
    const data = await orders.getProducts()

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

router.put('/:userId/', async (req, res, next) => {
  try {
    console.log('backend req.body', req.body)
    const modifyOrder = await OrderDetails.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      },
      include: [Product]
    })
    const data = await modifyOrder.getProducts()
    res.send(await modifyOrder.update(req.body))
  } catch (err) {
    next(err)
  }
})

// router.delete('/:userId', async (req, res, next) => {
//   try {
//     console.log('what is my backend request', req.body)
//     // let result = await OrderDetails.findOne({
//     //   where: {
//     //     // orderId: req.body.orderId,
//     //     // wineId: req.body.wineId,
//     //     // userId: req.body.userId,
//     //   },
//     // })
//   } catch (err) {
//     next(err)
//   }
// })
module.exports = router
