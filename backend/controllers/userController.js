const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async(req,res) =>{
    const {name,email,password} = req.body;
    const userExist = await User.findOne({email})
    if (userExist){
        res.sendStatus(400)
        throw new Error('usr already exist');
    }
    else{
        const user = await new User({name,email,password})
    
        if(user){
            res.json({
                name: user.name,
                email: user.email,
                _id : user._id
            })
            const result = await user.save()
            console.log(result)
        }
        else{
            throw new Error('error occured');
        }
        
    
    }})
   
module.exports = registerUser