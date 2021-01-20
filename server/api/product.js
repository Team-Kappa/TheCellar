const router = require('express').Router()
const {Product} = require('../db/models')

//PUT wine
router.put('/:wineId', async (req, res, next) => {
  console.log(req.params.wineId)
  try {
    res.sendStatus(500)
    // console.log(req)
  } catch (error) {
    console.log('hello from back')
    next(error)
  }
})
console.log(router)
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
    const wine = await Product.create(req.body)
    res.status(200).json(wine)
  } catch (error) {
    next(error)
  }
})

//DELETE WINE
router.delete('/:wineId', async (req, res, next) => {
  try {
    const wine = await Product.destroy({
      where: {
        id: req.params.wineId
      }
    })
    res.json(wine)
  } catch (error) {
    next(error)
  }
})

module.exports = router
