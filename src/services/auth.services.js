const { sendToken } = require('../../utils/sendToken')
const userModel = require('../models/user.models')

const authService = {
  signUp: async (reqBody, res) => {
    const usedEmail = await userModel.findOne({
      email: reqBody.email,
    })

    if (usedEmail) return res.status(404).json('This email already exists')

    const user = await userModel.create(reqBody)

    const token = await sendToken(user)

    return { user, token }
  },
}

module.exports = authService
