const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },

  rate: {
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Invoice', invoiceSchema)
