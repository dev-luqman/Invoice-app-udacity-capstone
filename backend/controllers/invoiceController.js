const Invoice = require('../models/Invoice')

exports.getInvoice = (req, res, next) => {}

exports.createInvoice = (req, res, next) => {
  const Invoice = new Invoice(req.body.title)
  Invoice.save()
  res.json({ msg: 'postInvoice' })
}

exports.getAllInvoices = (req, res, next) => {
  Invoice.fetchAll((products) => {
    // res.render('shop', {
    //   prods: products,
    //   pageTitle: 'Shop',
    //   path: '/',
    //   hasProducts: products.length > 0,
    //   activeShop: true,
    //   productCSS: true,
    // })
  })
}

exports.deleteInvoice = (req, res, next) => {
  const customer = new Invoice(req.body.title)
  customer.save()
  res.json({ msg: 'deleteInvoice' })
}
