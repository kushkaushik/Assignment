const USER = require('../schema/Myuser')
const jwt = require('jsonwebtoken')
const AUTH = async(req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer ")){
        token = req?.headers?.authorization?.split(' ')[1];
        if(token){
            console.log(token)
            const decode = jwt.verify(token,"kush")
            const user =await USER.findById(decode?._id);
            req.user = user;
            next();
        }else{
          console.log("Please verify yourself")
        }
    }else{
        console.log("Invalid")
    }
}

module.exports = AUTH;