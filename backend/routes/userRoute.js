const express = require('express')
const router  = express.Router()
const {registerUser,logUser} = require('../controllers/userController')
const verifyToken = require('../middlewares/userToken')

router.route('/register').post(registerUser)
router.route('/login').post(logUser)

 
module.exports = router