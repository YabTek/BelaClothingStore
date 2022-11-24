const express = require('express')
const router  = express.Router()
const {registerUser,logUser } = require('../controllers/userController')

router.route('/').post(registerUser)
router.route('/login').post(logUser)
 
module.exports = router