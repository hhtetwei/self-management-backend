const sendToken = require('../../utils/sendToken')
const { USER_ERRORS } = require('../constants/errors.constants')
const userModel = require('../models/user.models')

const authService = {
  signUp: async (reqBody) => {
    const usedEmail = await userModel.findOne({
      email: reqBody.email ? reqBody.email : '',
    })

    if (usedEmail) return USER_ERRORS.ALREADY_EXIST

    const user = await userModel.create(reqBody)

    const jwtToken = sendToken(user)

    return { user, jwtToken }
  },
}

module.exports = authService
