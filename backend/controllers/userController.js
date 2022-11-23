const registerUser = (req,res) =>{
    const {email,password} = req.body;
    res.json({email});
}

module.exports = registerUser