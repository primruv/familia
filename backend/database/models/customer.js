const mongoose = require('mongoose')
const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,


  },
  email: {
    type: String,
    trim: true,


  },
  phoneNumber: {
    type: Number


  },
  password: {
    type: String,
    trim: true

  },
  plan: {
    type: String
  },
  refferalCode: { type: String }
})

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer