const mongodb = require('mongodb')
const getDb = require('../utils/database').GetDb

const ObjectId = mongodb.ObjectId

class User {
  constructor(username, email, cart, id) {
    this.name = username
    this.email = email
    this.password = password
    this.phone = phoneNo
    this.cart = cart // {items: []}
    this._id = id ? new mongodb.ObjectId(id) : null
  }

  save() {
    const db = getDb()
    let newUser = db.collection('admin').findOne({ email: this.email })
    if (!newUser) {
      return db.collection('admin').insertOne(this)
    } else {
      throw 'Customer exist'
    }
  }

  static findById(userId) {
    const db = getDb()
    return db
      .collection('admin')
      .findOne({ _id: new ObjectId(userId) })
      .then((user) => {
        console.log(user)
        return user
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteById(id) {
    const db = getDb()
    return db
      .collection('admin')
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

module.exports = User
