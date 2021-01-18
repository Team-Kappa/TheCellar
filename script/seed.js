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
      admin: true
    }),
    User.create({
      username: 'Jonathan',
      email: 'jonathanwine@gmail.com',
      password: 'winewine',
      admin: true
    }),
    User.create({
      username: 'Eun',
      email: 'eunwine@gmail.com',
      password: 'winewine',
      admin: true
    }),
    User.create({
      username: 'Calvin',
      email: 'calvinwine@gmail.com',
      password: 'winewine',
      admin: true
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Red Wine',
      price: 1999,
      year: 2000,
      origin: 'New Jersey',
      description: 'This is a red wine. Enjoy it while you can',
      type: 'Reds'
    }),
    Product.create({
      name: 'Bloody Red Wine',
      price: 999,
      year: 2001,
      origin: 'New Jersey',
      description: 'This is a red wine. Enjoy it while you can',
      type: 'Reds'
    }),
    Product.create({
      name: 'Really Red Wine',
      price: 1799,
      year: 2003,
      origin: 'New Jersey',
      description: 'This is a red wine. Enjoy it while you can',
      type: 'Reds'
    }),
    Product.create({
      name: 'White Wine',
      price: 999,
      year: 2010,
      origin: 'Napa Valley',
      description: 'This is a white wine. Enjoy it while you can',
      type: 'Whites'
    }),
    Product.create({
      name: 'White Cell Wine',
      price: 2999,
      year: 2012,
      origin: 'Napa Valley',
      description: 'This is a white wine. Enjoy it while you can',
      type: 'Whites'
    }),
    Product.create({
      name: 'Pure White Wine',
      price: 2999,
      year: 2015,
      origin: 'Napa Valley',
      description: 'This is a white wine. Enjoy it while you can',
      type: 'Whites'
    }),
    Product.create({
      name: 'Super Sparkling Wine',
      price: 299999,
      year: 1800,
      origin: 'Italy',
      description: 'This is a sparkling wine. Enjoy it while you can',
      type: 'Sparkling'
    }),
    Product.create({
      name: 'Sparkling Wine',
      price: 29999,
      year: 1900,
      origin: 'Italy',
      description: 'This is a sparkling wine. Enjoy it while you can',
      type: 'Sparkling'
    }),
    Product.create({
      name: 'Just Sparkling Wine',
      price: 2999,
      year: 1890,
      origin: 'Italy',
      description: 'This is a sparkling wine. Enjoy it while you can',
      type: 'Sparkling'
    }),
    Product.create({
      name: 'Orange Wine',
      price: 3999,
      year: 2001,
      origin: 'California',
      description: 'This is a orange flavored wine. Enjoy it while you can',
      type: 'Fruit'
    }),
    Product.create({
      name: 'Blueberry Wine',
      price: 1999,
      year: 2020,
      origin: 'California',
      description: 'This is a blueberry flavored wine. Enjoy it while you can',
      type: 'Fruit'
    }),
    Product.create({
      name: 'Strawberry Wine',
      price: 2999,
      year: 2021,
      origin: 'California',
      description: 'This is a strawberry flavored wine. Enjoy it while you can',
      type: 'Fruit'
    }),
    Product.create({
      name: 'Rose Wine',
      price: 19999,
      year: 2008,
      origin: 'New York',
      description: 'This is a rose wine. Enjoy it while you can',
      type: 'Rose'
    }),
    Product.create({
      name: 'Pink Rose Wine',
      price: 1999,
      year: 2003,
      origin: 'New York',
      description: 'This is a rose wine. Enjoy it while you can',
      type: 'Rose'
    }),
    Product.create({
      name: 'Floral Rose Wine',
      price: 9999,
      year: 2012,
      origin: 'New York',
      description: 'This is a rose wine. Enjoy it while you can',
      type: 'Rose'
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
