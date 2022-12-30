const express = require('express')
const router = express.Router()
const {updateUser,getUser, getUserById,deleteUser} = require('../controllers/userCrud')
const verifyToken = require('../middlewares/userToken')

//get all users
router.route('/').get(getUser)

//get a user by id
router.route('/:id').get(getUserById)

//update user
router.route('/:id').put(verifyToken,updateUser)

//delete
router.route('/:id').delete(verifyToken,deleteUser)


module.exports = router
