const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('api/wines/', () => {
    const deliciousWine = 'deliciousWine'

    beforeEach(() => {
      return Product.create({
        name: deliciousWine
      })
    })

    it('GET /api/wines', async () => {
      const res = await request(app)
        .get('/api/wines')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(deliciousWine)
    })
  })
})
