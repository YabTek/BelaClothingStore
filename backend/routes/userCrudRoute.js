const express = require('express')
const router = express.Router()
const {updateUser,getUser, getUserById,deleteUser} = require('../controllers/userCrud')

//get all users
router.route('/').get(getUser)

//get a user by id
router.route('/:id').get(getUserById)

//update user
router.route('/:id').put(updateUser)

//delete
router.route('/:id').delete(deleteUser)


module.exports = router
