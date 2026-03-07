const jwt=require("jsonwebtoken")   
const tokenBlackListModel=require("../models/blacklist.models") 

async function authUser(req,res,next){
    const token=req.cookies.token

    if(!token){                 //if token not present then unauthorized    
        return res.status(401).json({
            message:"token not provided"
        })
    }

    const isTokenBlackListed=await tokenBlackListModel.findOne({token})   //check if token is blacklisted or not
 
        if(isTokenBlackListed){   //if token is blacklisted then messge invalid
            return res.status(401).json({
                message:"token is invalid"
            })  
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded   //if token valid then get the user details from token and pass it to next in req.user
        next();
    }catch(err){
        return res.status(401).json({
            message:"Invalid token"
        });
    }

    

       

}

module.exports={authUser}