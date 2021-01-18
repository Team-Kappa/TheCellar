const router = require('express').Router()
const {Product} = require('../db/models')

//GET ALL WINE
router.get('/', async (req, res, next) => {
  try {
    const wines = await Product.findAll()
    res.status(200).json(wines)
  } catch (err) {
    next(err)
  }
})

//GET SINGLE WINE
router.get('/:wineId', async (req, res, next) => {
  try {
    const wine = await Product.findByPk(req.params.wineId)
    res.status(200).json(wine)
  } catch (error) {
    next(error)
  }
})

//POST ADD NEW WINE
router.post('/', async (req, res, next) => {
  try {
    console.log('req.body -->', req.body)
    const wine = await Product.create(req.body)
    res.status(200).json(wine)
  } catch (error) {
    next(error)
  }
})

module.exports = router
