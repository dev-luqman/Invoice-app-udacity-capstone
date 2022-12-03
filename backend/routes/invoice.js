const express = require('express')
const router = express.Router()

const invoiceController = require('../controllers/invoiceController')

// /Invoice/register => POST
router.post('/register', invoiceController.createInvoice)

// /Invoice/:id => GET
router.get('/:id', invoiceController.getInvoice)

// /Invoice/all => GET
router.get('/all', invoiceController.getAllInvoices)

// /Invoice/login => DELETE
router.delete('/:id', invoiceController.deleteInvoice)

module.exports = router
