const router = require('express').Router()
const {OrderDetails} = require('../db/models')

//GET ALL ORDER DETAILS
router.get('/', async (req, res, next) => {
  try {
    const orderDetails = await OrderDetails.findAll()
    res.status(200).json(orderDetails)
  } catch (err) {
    next(err)
  }
})

//POST ORDER DETAILS
router.post('/', async (req, res, next) => {
  try {
    //console.log('req', req.body)
    const orderDetails = await OrderDetails.findOrCreate({
      where: {
        orderId: req.body.userId, //figure out issue here
        productId: req.body.productId,
        productQuantity: req.body.productQuantity,
        productPrice: req.body.productPrice
      }
    })
    res.json(orderDetails)
  } catch (err) {
    next(err)
  }
})

module.exports = router
