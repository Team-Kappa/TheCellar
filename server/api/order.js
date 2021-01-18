const router = require('express').Router()
const {Order, Product} = require('../db/models')

//Add item to order
router.get('/', async (req, res, next) => {
  try {
    const order = await Order.findAll()
    res.json(order)
  } catch (err) {
    next(err)
  }
})
//add a product to through table
router.post('/', async (req, res, next) => {
  try {
    console.log(req.body)
    //need userId, isCompleted, productID, product quantity
    //Required: userID, isComplete
    let order = await Order.findOrCreate({
      where: {
        userId: req.body.userId,
        isCompleted: req.body.isCompleted
      }
    })
    console.log('Order: ', order)
    //Required: productID
    const product = await Product.findByPk(2) //req.body.productID
    console.log('Product: ', product)

    //Required: productQuantity, product price
    await product.addOrder(order[0], {
      through: {productQuantity: 2, productPrice: 20}
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
