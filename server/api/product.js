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
    if (req.user) {
      if (req.user.dataValues.admin) {
        const wine = await Product.create(req.body)
        res.status(200).json(wine)
      } else {
        res.status(401).json('User does not have add wine access.')
      }
    } else {
      res.status(401).json('User does not have add wine access.')
    }
  } catch (error) {
    next(error)
  }
})

//DELETE WINE
router.delete('/:wineId', async (req, res, next) => {
  try {
    if (req.user) {
      if (req.user.dataValues.admin) {
        const wine = await Product.destroy({
          where: {
            id: req.params.wineId
          }
        })
        res.json(wine)
      } else {
        res.status(401).json('User does not have delete wine access.')
      }
    } else {
      res.status(401).json('User does not have delete wine access.')
    }
  } catch (error) {
    next(error)
  }
})

//PUT wine
router.put('/:wineId', async (req, res, next) => {
  try {
    if (req.user) {
      if (req.user.dataValues.admin) {
        const wine = await Product.findByPk(req.params.wineId)
        res.send(await wine.update(req.body))
      } else {
        res.status(401).json('User does not have edit wine access.')
      }
    } else {
      res.status(401).json('User does not have edit wine access.')
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
