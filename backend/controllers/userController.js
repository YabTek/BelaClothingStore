const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');


const registerUser = asyncHandler(async(req,res) => {
   const {name,email,password} = req.body
   const newUser = await new User({name,email,password})

   try{
      const user = await newUser.save()
      res.json({
       name : user.name,
       email: user.email,
       password: user.password,
       _id: user._id,
       token: generateToken(user._id)
   
      })
      console.log(user.name)
   }
   catch(err){
      throw new Error('error occured')
   }
   
});

const logUser = asyncHandler(async(req,res) => {
   const {email,password} = req.body
   const user = await User.findOne({email})
   console.log(user)
  if (user && (await user.matchPassword(password))){
   res.json({
       name: user.name,
       email: user.email,
       _id : user._id,
       token: generateToken(user._id)

   })
  }
  else{
   res.sendStatus(400);
   throw new Error('Invalid email or password');
}
})

module.exports = {registerUser,logUser}