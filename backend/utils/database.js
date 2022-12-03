const { DATABASE_URL } = require('./config')

const mongoose = require('mongoose')

const mongoConnet = (callBack) => {
  mongoose
    .connect(DATABASE_URL)
    .then((client) => {
      callBack(client)
    })
    .catch((err) => {
      console.error('error')
      console.error(err)
      throw err
    })
}

exports.mongoConnet = mongoConnet
