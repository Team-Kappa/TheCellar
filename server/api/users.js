const router = require('express').Router()
const {User} = require('../db/models')

//GET ALL USER
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email', 'username']
      })
      res.json(users)
    } else {
      res.status(401).json('User does not have get user access.')
    }
  } catch (err) {
    next(err)
  }
})

//GET SINGLE USER
router.get('/:userId', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findByPk(req.params.userId, {
        attributes: ['id', 'email', 'username']
      })
      res.status(200).json(user)
    } else {
      res.status(401).json('User does not have get user access.')
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
