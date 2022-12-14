const express = require('express')
const router  = express.Router()
const {registerUser,logUser} = require('../controllers/userController')
const verifyToken = require('../middlewares/userAuth')

router.route('/').post(registerUser)
router.route('/login').post(verifyToken,logUser)

 
module.exports = router