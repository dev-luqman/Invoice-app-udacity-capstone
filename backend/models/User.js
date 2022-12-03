const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
  name: { type: String, required: true, lowercase: true, trim: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: { type: String, required: true, trim: true },
  phoneNo: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Admin', adminSchema)
