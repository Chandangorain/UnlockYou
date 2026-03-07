const express=require('express')

const authRouter=express.Router()   //By using express.Router(), you are telling the app: "Everything related to 'Auth' lives inside this specific file".
const authController=require("../controllers/auth.controller")
const authMiddleware=require("../middlewares/auth.middlewares")   //to protect the routes and check the token in cookie and get the user details from token and pass it to the getme routes
/**
 * @route POST /api/auth/register
 * @deescription register a new user
 * @access public
 */

authRouter.post("/register",authController.registerUserController)  //when post req comes this excution happens

/**
 * @route POST /api/auth/login
 * @deescription login a user with email and pass
 * @access public
 */
authRouter.post("/login",authController.loginUserController)  //when post req comes this excution happens
 

/**
 * @route GET /api/auth/logout
 * @deescription clear token from cookie and add the token in blacklist
 * @access public
 */
authRouter.get("/logout",authController.logoutUserController)  //when get req comes this excution happens


/**
 * @route GET /api/auth/get-me
 * @description get the details of logged in user
 * @access private
 */
// authRouter.get("/get-me",authMiddleware,authController.getMeController)  //when get req comes this excution happens. it is protected route so we will use authMiddleware to check the token and get the user details from token and pass it to controller in req.user
 
authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)  //when get req comes this excution happens. it is protected route so we will use authMiddleware to check the token and get the user details from token and pass it to controller in req.user


module.exports=authRouter