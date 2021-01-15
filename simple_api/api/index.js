const router = require('express').Router()
const {categories, products, reviews, users} = require('./mock')
const {reply, getById} = require('./utils')

router.get('/categories', (req, res, next) => {
  reply(res, categories)
})

router.get('/products', (req, res, next) => {
  const {id} = req.query
  let result = products
  if (id) {
    const category = getById(categories)(id)
    if (category) {
      result = category.products.map(getById(result))
    }
  }
  reply(res, result)
})

router.get('/reviews', (req, res, next) => {
  const {id} = req.query
  let result = reviews
  if (id) {
    const product = getById(products)(id)
    if (product) {
      result = product.reviews.map(getById(result))
    }
  }
  reply(res, result)
})

router.get('/users', (req, res, next) => {
  reply(res, users)
})

module.exports = router
