const mongoose = require('mongoose');

const connectDB = async () => {
  
      mongoose.connect("mongodb://127.0.0.1/user")
     .then(()=>console.log("connected to mongoDB"))
     .catch(err=>console.log(err))
};
module.exports  = connectDB

