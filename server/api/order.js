const router = require('express').Router()
const {Order} = require('../db/models')

//Add item to order
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.findAll()
      res.json(order)
    } else {
      res.status(401).json('User does not have get order access.')
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (req.user) {
      const addOrder = await Order.create(req.body)
      res.json(addOrder)
    } else {
      res.status(401).json('User does not have add order access.')
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
