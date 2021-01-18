const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/wines', require('./product'))
router.use('/order', require('./order'))
router.use('/orderDetails', require('./orderDetails'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
