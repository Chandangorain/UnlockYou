const userModel=require("../models/user.model")
const bcrypt=require("bcryptjs")   //for hashing the password
const jwt=require("jsonwebtoken")   //for generating the token

/**
 * @name registerUserController
 * @deescription register a new user,expects username,email,pass in the req body
 * @access public
 */


        //user registration controller logic
async function registerUserController(req,res){
    const {username,email,password}=req.body

    if(!username || !email || !password){       //if not exist then provide
        return res.status(400).json({
            message:"please provide username,email and password"
        })
    }
    const isUserAlreadyExist=await userModel.findOne({  //check if exist anyone of them
        $or:[{username},{email}]
    })

    if(isUserAlreadyExist){             //if exists then messge
        return res.status(400).json({
            message:"username or email already exist with email or username"
        })
    }
    // else create the user
    const hash= await bcrypt.hash(password,10)   //hash the password with 10 rounds of salt
    const user=await userModel.create({
        username,
        email,
        password:hash
    })
    const token=jwt.sign(               //generate token with user id and username
        {id:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"1000d"}
    )
    res.cookie("token",token)                      //set the token in cookie with name token. it will be used for authentication in future
    res.status(201).json({
        message:"user registered successfully",
        user:{
            id:user._id,
            username:user.username, 
            email:user.email
        },
        
    })


}
module.exports ={
    registerUserController
}