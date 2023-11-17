const authService = require('../services/auth.services')

const authController = {
  signUp: async (req, res, next) => {
    try {
      const { user, jwtToken } = await authService.signUp(req.body)

      return res.status(201).json({ data: user, token: jwtToken })
    } catch (err) {
      next(err)
    }
  },
}

module.exports = authController
