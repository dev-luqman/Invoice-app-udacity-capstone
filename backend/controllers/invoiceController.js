const Invoice = require('../models/Invoice')
const Customer = require('../models/Customer')

const { SENDGRID_API_KEY, EMAIL_FROM } = require('../utils/config')

const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(SENDGRID_API_KEY)

// Email Format
const msg = {
  to: 'lukheebalo@gmail.com',
  from: EMAIL_FROM,
  subject: 'Sending with SendGrid Is Fun',
  text: 'A test project for sending mail',
}

let ITEM_PER_PAGE = 5

exports.createInvoice = async (req, res, next) => {
  const userId = req.body.userId
  const items = req.body.items
  // find customer first
  Customer.findById(userId) // find if user exit first
    .then((response) => {
      console.log(response)
      if (!response) {
        throw 'user not found'
      }
      //Create new invoice
      const invoice = new Invoice({ userId, items })
      return invoice.save()
    })
    .then((result) => {
      res.json({
        msg: `Invoice created successfully`,
        customer: result,
      })

      msg.html = `<strong> Your invoice is ready, please check ${result._id} </strong>`
      return sendgrid
        .send(msg)
        .then((response) => {
          console.log('Email sent\n', response)
        })
        .catch((err) => {
          console.error(err)
        })
    })

    .catch((err) => {
      console.log(err)
      res.status(400).json({
        msg: `Invoice can not be created`,
        error: err,
      })
    })
}

exports.getInvoice = (req, res, next) => {
  const ID = req.params.id
  Invoice.findById(ID)
    .populate('userId')
    .then((response) => {
      if (!response) {
        throw 'Invoice with the id not found'
      }
      return res.json({
        invoice: response,
        msg: 'Invoice found successfully',
      })
    })
    .catch((err) => {
      res.status(400).json({
        msg: 'Invoice not found',
        error: err,
      })
    })
}

exports.getAllInvoices = (req, res, next) => {
  let page = req.query.page || 1
  let totalItem

  Invoice.find()
    .count()
    .then((total) => {
      totalItem = total
      return Invoice.find()
        .skip((page - 1) * ITEM_PER_PAGE)
        .limit(ITEM_PER_PAGE)
        .populate('userId')
    })
    .then((response) => {
      console.log(response)
      return res.json({
        invoice: response,
        total: totalItem,
        msg: 'Invoice call successfully',
      })
    })
    .catch((err) => {
      res.status(400).json({
        msg: 'Invoice not found',
        error: err,
      })
    })
}

exports.deleteInvoice = (req, res, next) => {
  const ID = req.params.id
  Invoice.findByIdAndRemove(ID)
    .then((response) => {
      return res.status(200).json({
        invoice: response,
        msg: 'Invoice deleted successfully',
      })
    })
    .catch((err) => {
      res.status(400).json({
        msg: 'Invoice not found',
        error: err,
      })
    })
}
