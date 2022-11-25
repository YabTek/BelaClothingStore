const mongoose = require('mongoose');

const connectDB = async () => {
  
      mongoose.connect("mongodb://127.0.0.1/usercontrol")
     .then(()=>console.log("connected to mongoDB"))
     .catch(err=>console.log(err))
};
module.exports  = connectDB

