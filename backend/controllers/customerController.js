const Customer = require('../models/Customer')

exports.getCustomer = (req, res, next) => {
  res.send('Hello get customer')
}

exports.createCustomer = (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const phoneNo = req.body.phoneNo
  const customer = new Customer(name, email, phoneNo)
  customer
    .save()
    .then((result) => {
      console.log(result)
      console.log('Created Custommer')
      res.json({ msg: 'Customer created successfully' })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteById = (req, res, next) => {
  const ID = req.params.id
  Customer.deleteById(ID)
    .then((res) => {
      res.status(200).json({
        user: res,
        msg: 'Customer deleted successfully',
      })
    })
    .catch((err) => {})
  res.json({ msg: 'deleteAdmin' })
}

exports.getAllCustomer = (req, res, next) => {
  console.log('hello')
  Customer.getAllCustomer()
    .then((response) => {
      console.log(response)
      res.json({
        customer: response,
        msg: 'customer call successfully',
      })
    })
    .catch((err) => {})
}

exports.deleteCustomer = (req, res, next) => {
  const customer = new Customer(req.body.title)
  customer.save()
  res.json({ msg: 'deleteCustomer' })
}
