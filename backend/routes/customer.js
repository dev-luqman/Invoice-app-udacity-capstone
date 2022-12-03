const router = require('express').Router()
const customerController = require('../controllers/customerController')

router.get('/', (req, res, next) => {
  res.send('Customer Home Route')
})

// /customer/register => POST
router.post('/', customerController.createCustomer)

// /customer/all => GET
router.get('/all', customerController.getAllCustomer)

// /customer/:id => GET
router.get('/:id', customerController.getCustomer)

// /customer/login => DELETE
router.delete('/:id', customerController.deleteCustomer)

module.exports = router
