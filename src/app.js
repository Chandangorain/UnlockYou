//app.js initiate the server and use the routes middlewares
const express=require("express")

const app=express()

app.use(express.json()) //middlewares . it allow to read the data in req.body 

const authRouter=require("./routes/auth.routes")        // require all the routes
app.use("/api/auth",authRouter)






module.exports=app