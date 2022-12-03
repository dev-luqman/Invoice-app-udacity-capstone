const express = require('express')
const router = express.Router()

const invoiceController = require('../controllers/invoiceController')

// /api/Invoice/ => POST
router.post('/', invoiceController.createInvoice)

// /Invoice/all => GET
router.get('/all', invoiceController.getAllInvoices)

// /Invoice/:id => GET
router.get('/:id', invoiceController.getInvoice)

// /Invoice/login => DELETE
router.delete('/:id', invoiceController.deleteInvoice)

module.exports = router
