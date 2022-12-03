const mongoose = require('mongoose')

const Schema = mongoose.Schema

const invoiceSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Customer',
  },

  items: [
    {
      item: { type: String, required: true },
      qty: { type: Number, required: true },
      discount: { type: Number },
      unitPrice: { type: Number, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Invoice', invoiceSchema)
