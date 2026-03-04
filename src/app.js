//app.js initiate the server and use the routes middlewares
const express=require("express")

const app=express()

app.use(express.json()) //middlewares . it allow to read the data in req.body 

module.exports=app