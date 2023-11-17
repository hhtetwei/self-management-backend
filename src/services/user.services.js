const { USER_ERRORS } = require('../constants/errors.constants')
const userModel = require('../models/user.models')

const userService = {
  getUser: async (id) => {
    const user = await userModel.findById(id)

    if (!user) return USER_ERRORS.NOT_FOUND

    return user
  },

  updateUser: async ({ id, payload }) => {
    const user = await userModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })

    if (!user) return USER_ERRORS.NOT_FOUND

    return user
  },
}

module.exports = userService
