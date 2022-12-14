const express = require('express')
const router = express.Router()
const {postCloth,getCloth,getClothById,
    updateCloth,deleteCloth} = require('../controllers/clothController')

//post cloth
router.route('/').post(postCloth)

//get all cloth
router.route('/').get(getCloth)

//get one cloth
router.route('/:id').get(getClothById)

//update 
router.route('/:id').put(updateCloth)

//delete
router.route('/:id').delete(deleteCloth)

module.exports = router