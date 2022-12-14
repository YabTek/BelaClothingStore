const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoute')
const userCrudRoute = require('./routes/userCrudRoute')
const clothRoute = require('./routes/clothRoute')
const connectDB = require('./config/db')
const clothes = require('./data/clothdata')


app.use(express.json())

dotenv.config();
connectDB();
app.use(express.static('public'))


app.get('/',(req,res) =>{
    res.send('hello world')
});

// app.get('/api/clothes',(req,res)=>{
//     res.json(clothes)
// }
// );



app.use('/api/users',userRoute)
app.use('/api/users',userCrudRoute)
app.use('/api/clothes',clothRoute)





app.listen(process.env.PORT,(req,res) =>{
    console.log("server running on port 5000");
}
)
