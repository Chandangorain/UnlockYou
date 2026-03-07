const userModel=require("../models/user.model")
const bcrypt=require("bcryptjs")   //for hashing the password
const jwt=require("jsonwebtoken")   //for generating the token
const tokenBlackListModel=require("../models/blacklist.models")   //for blacklisting the token on logout
const { get } = require("mongoose")


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

/**
 * @name loginUserController
 *  @description login a user,expects email and pass in the req body
 * @access public
 */
async function loginUserController(req,res){

    const {email,password}=req.body
    const user=await userModel.findOne({email})   //find the user with email
    if(!user){                                  //if not exist then message invalid
        return res.status(400).json({
            message:"invalid email or password"
        })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password)   //else exist, then compare the password with hashed password stored in db
    if(!isPasswordValid){
        return res.status(400).json({
            message:"invalid email or password"         //if not matched then message invalid
        })
    }
    const token=jwt.sign(               //else matched, then generate token with user id and username
        {id:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"1000d"}
    )
    res.cookie("token",token)                      //set the token in cookie with name token. it will be used for authentication in future
    res.status(200).json({
        message:"user logged in successfully",
        user:{
            id:user._id,
            username:user.username, 
            email:user.email
        }
    })
}


/**
 * @name logoutUserController
 * @description clear token from cookie and add the token in blacklist
 * @access public
 */
async function logoutUserController(req,res){
    const token=req.cookies.token;
    if(token){                                  //if token present then blaclist
        await tokenBlackListModel.create({token})   //add the token in blacklist collection

    }
    res.clearCookie("token")   //clear the token from cookie
    res.status(200).json({
        message:"user logged out successfully"
    })
}

/**
 * @name getMeController
 * @description get the details of logged in user
 * @access private
 */
async function getMeController(req,res){
    const user=await userModel.findById(req.user.id)   //get the user details from database with id from req.user which is set in authMiddleware
    res.status(200).json({
        message:"user details fetched successfully",
        user:{
            id:user._id,
            username:user.username, 
            email:user.email
        }    
    })
}
module.exports={
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
}   

