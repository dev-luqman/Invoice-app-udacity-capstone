const Customer = require('../models/Customer')
const Invoice = require('../models/Invoice')

exports.createCustomer = (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const phoneNo = req.body.phoneNo
  const customer = new Customer({ name, email, phoneNo })
  console.log(customer)
  customer
    .save()
    .then((result) => {
      res.json({
        msg: `Customer:${name} created successfully`,
        customer: result,
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json({
        msg: `Customer with email:${email} - found`,
      })
    })
}

exports.deleteCustomer = (req, res, next) => {
  const ID = req.params.id
  Invoice.deleteMany({ userId: ID })
    .then((response) => {
      console.log(response)
      return Customer.findByIdAndRemove(ID)
    })
    .then((response) => {
      console.log(response)
      res.status(200).json({
        customer: response,
        msg: 'Customer deleted successfully',
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json({ msg: 'error found', error: err })
    })
}

exports.getCustomer = (req, res, next) => {
  console.log('get custommer')
  const ID = req.params.id
  Customer.findById(ID)
    .then((response) => {
      console.log(response)
      if (!response) {
        throw 'user not found'
      } else {
        res.json({
          customer: response,
          msg: 'customer successfully',
        })
      }
    })
    .catch((err) => {
      res.status(400).json({
        msg: 'Customer not found',
        error: err,
      })
    })
}

exports.getAllCustomer = (req, res, next) => {
  Customer.find()
    .then((response) => {
      console.log('jnskd')
      return res.json({
        customer: response,
        msg: 'customer call successfully',
      })
    })
    .catch((err) => {
      console.log(error)
      res.status(400).json({ msg: 'error found', error: err })
    })
}
