const { Router } = require('express')
const authController = require('../controllers/auth.controller')
const validate = require('../middlewares/validateSchema')
const schema = require('../schemas/user.schemas')

const router = Router()

router.post(
  '/email/signup',
  validate(schema.CREATE_USER),
  authController.signUp
)

module.exports = router
