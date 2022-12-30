const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name : {
       type: String,
       required: true,
       unique: true,
    },
    email : {
        type: String,
        required: [true,"email is required"],
        unique: true,
     },
     password : {
        type: String,
        required: [true,"password is required"],
     },
     profilepic : {
        type: String,
        default: ""
     },
    },
    {
        timestamps: true
    }
)

userSchema.pre('save',async function(next){
   if(!this.isModified('password')){
     next()
   }
   const salt = await bcrypt.genSalt(8)
   this.password = await bcrypt.hash(this.password,salt)
 })
 userSchema.methods.matchPassword = async function (enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password);
 };
 

const User = mongoose.model('usercontrol',userSchema)
module.exports = User