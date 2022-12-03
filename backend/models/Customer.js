const mongodb = require('mongodb')
const getDb = require('../utils/database').GetDb

const ObjectId = mongodb.ObjectId

class Customer {
  constructor(username, email, phoneNo) {
    this.name = username
    this.email = email
    this.phoneNo = phoneNo
  }

  save() {
    const db = getDb()
    let newUser = db.collection('customer').findOne({ email: this.email })
    if (!newUser) {
      return db.collection('customer').insertOne(this)
    } else {
      throw 'Customer Found'
    }
  }

  static findById(customerId) {
    const db = getDb()
    return db
      .collection('custommer')
      .findOne({ _id: new ObjectId(customerId) })
      .then((res) => {
        console.log(user)
        return res
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static getAllCustomer() {
    console.log('get all customer model')
    const db = getDb()
    return db
      .collection('customer')
      .find()
      .toArray()
      .then((customer) => {
        return customer
      })
      .catch((err) => {
        console.log(error)
      })
  }

  static deleteById(id) {
    const db = getDb()
    return db
      .collection('customer')
      .deleteOne({ _id: new mongodb.ObjectId(id) })
      .then((result) => {
        console.log('Deleted')
        return result
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = Customer
