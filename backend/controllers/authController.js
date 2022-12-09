const Admin = require('../models/User')

exports.createAdmin = (req, res, next) => {
  const name req.body.name
  const email = req.body.email
  const password = req.body.password
  const phoneNo = req.body.phoneNo
  const admin = new Admin(name, email, phoneNo, password)
  admin
    .save()
    .then((result) => {
      console.log(result)
      console.log('Created Product')
      res.json({ msg: 'User created successfully' })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.loginAdmin = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const admin = new Admin(req.body.title)
  Admin.save()
  res.json({ msg: 'loginAdmin' })
}

exports.deleteAdmin = (req, res, next) => {
  const ID = req.params.id
  Admin.deleteById(ID)
    .then((res) => {
      res.status(200).json({
        user: res,
        msg: 'User deleted successfully',
      })
    })
    .catch((err) => {})
  res.json({ msg: 'deleteAdmin' })
}
