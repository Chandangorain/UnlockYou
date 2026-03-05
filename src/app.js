//app.js initiate the server and use the routes middlewares
const express=require("express")
const cookieParser=require("cookie-parser")   //to read the cookies from req.headers
const app=express()

app.use(express.json()) //middlewares . it allow to read the data in req.body 
app.use(cookieParser())  //middlewares . it allow to read the cookies in req.cookies
const authRouter=require("./routes/auth.routes")        // require all the routes
app.use("/api/auth",authRouter)






module.exports=app