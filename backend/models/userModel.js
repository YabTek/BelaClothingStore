const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        },
    }
)
userSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    next()
  }
  const salt = await bcrypt.genSalt(8)
  this.password = await bcrypt.hash(this.password,salt)
})

const User = mongoose.model('users',userSchema)

module.exports = User