const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoute')
const userCrudRoute = require('./routes/userCrudRoute')
const connectDB = require('./config/db')
const clothes = require('./data/clothdata')


app.use(express.json())

dotenv.config();
connectDB();
app.use(express.static('public'))


app.get('/',(req,res) =>{
    res.send('hello world')
});

app.get('/api/clothes',(req,res)=>{
    res.json(clothes)
}
);


app.use('/api/users',userRoute)
app.use('/api/users',userCrudRoute)


app.get('/api/clothes/:id',(req,res)=>{
    const found = clothes.find(cloth => cloth._id === req.params.id)
    res.json(found)
}
)

app.listen(5000,(req,res) =>{
    console.log("server running on port 5000");
}
)
