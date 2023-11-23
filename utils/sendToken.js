const jwt = require('jsonwebtoken')

const sendToken = (user, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  })

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIES_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  }
  res.cookie('jwt', token, cookieOptions)

  return token
}

module.exports = { sendToken }
