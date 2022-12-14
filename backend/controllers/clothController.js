const Cloth = require('../models/clothModel')

const postCloth = (req,res) =>{
    const {img,price,size} = req.body
    const cloth = new Cloth({
        img,price,size
    })
    res.json({
            img: cloth.img,
            price: cloth.price,
            size: cloth.size
           })
           const  result = cloth.save()
           console.log(result)
    }
       
   

const getCloth = (req,res)=>{
     Cloth.find((error, cloth) => {
       if (error) {
         return next(error)
       } else {
         res.json(cloth)
       }
     })
};

const getClothById =(req,res)=>{tgfv                                                                        
   const id = req.params.id;
   Cloth.findById(id, function (error, cloth) {
       res.json(cloth)
   });
};

const updateCloth =  (req,res) =>{
       Cloth.findById(req.params.id, function (err, user) {
       if (!cloth){
           throw new Error('No cloth with this id')
       }
       else {
           cloth.img = req.body.img;
           cloth.price = req.body.price;
           cloth.size = req.body.size;
       
       cloth.save().then(clothes => {
       res.json('cloth updated Successfully');
       })
       .catch(err => {
       res.status(400).send("unable to update cloth");
       });
       }
       });
};

const deleteCloth = (req,res) =>{
       Cloth.findByIdAndRemove({ _id: req.params.id }, 
       function (err, cloth) {
       if (err) {
           res.json(err);
       }    
       else {
           res.json('cloth deleted successfully');
       }    
       });
};






module.exports = {postCloth,getCloth,getClothById,updateCloth,deleteCloth}