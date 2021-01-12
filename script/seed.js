'use strict'

const db = require('../server/db')
const {User, Product} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      username: 'Matt',
      email: 'mattwine@gmail.com',
      password: 'winewine',
      cartItems: [],
      admin: true
    }),
    User.create({
      username: 'Jonathan',
      email: 'jonathanwine@gmail.com',
      password: 'winewine',
      cartItems: [],
      admin: true
    }),
    User.create({
      username: 'Eun',
      email: 'eunwine@gmail.com',
      password: 'winewine',
      cartItems: [],
      admin: true
    }),
    User.create({
      username: 'Calvin',
      email: 'calvinwine@gmail.com',
      password: 'winewine',
      cartItems: [],
      admin: true
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Red Wine',
      price: 19.99,
      year: 2000,
      origin: 'New Jersey',
      description: 'This is a red wine. Enjoy it while you can',
      type: 'red'
    }),
    Product.create({
      name: 'White Wine',
      price: 9.99,
      year: 2010,
      origin: 'Napa Valley',
      description: 'This is a white wine. Enjoy it while you can',
      type: 'white'
    }),
    Product.create({
      name: 'Sparkling Wine',
      price: 29.99,
      year: 1800,
      origin: 'Italy',
      description: 'This is a sparkling wine. Enjoy it while you can',
      type: 'sparkling'
    }),
    Product.create({
      name: 'Orange Wine',
      price: 39.99,
      year: 2001,
      origin: 'California',
      description: 'This is a orange wine. Enjoy it while you can',
      type: 'orange'
    }),
    Product.create({
      name: 'Neon Wine',
      price: 199.99,
      year: 2002,
      origin: 'New York',
      description: 'This is a neon wine. Enjoy it while you can',
      type: 'neon'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
