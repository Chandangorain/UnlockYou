const express=require('express')

const authRouter=express.Router()   //By using express.Router(), you are telling the app: "Everything related to 'Auth' lives inside this specific file".
const authController=require("../controllers/auth.controller")
/**
 * @route POST /api/auth/register
 * @deescription register a new user
 * @access public
 */

authRouter.post("/register",authController.registerUserController)  //when post req comes this excution happens
module.exports=authRouter





module.exports=authRouter