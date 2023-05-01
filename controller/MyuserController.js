const USER = require('../schema/Myuser')
const tok = require('../config/GenerateToken')
const Creation = async(req,res)=>{
    const {name , email } = req.body;
   
   const user = new USER({
    name:name,
    email:email,
   })
   user.save().then(data=>{
    res.json(data)
   })
}



const LOGIN = async(req,res)=>{
    const {email } = req.body;
    const getUser = await USER.findOne({email})
    if(getUser){
        res.json({
            name:getUser?.name,
            email:getUser?.email,
            token:tok.GenerateToken(getUser?._id)
        })
    }
}


const GetData = async(req,res)=>{
    const getData = await USER.find().populate("techQuz","question");
    res.json(getData)
}





module.exports  = {Creation,LOGIN,GetData}