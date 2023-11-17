const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },

    password: {
      type: String,
    },

    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = new mongoose.model('users', userSchema, 'users')
