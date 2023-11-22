const { USER_ERRORS } = require('../constants/errors.constants')
const User = require('../models/user.models')
const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt
  }
  if (!token)
    return res.status(401).json('You are not authenticated.Please log in')

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(payload.id)
    if (!user) return USER_ERRORS.NOT_FOUND
    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authenticate
