require("dotenv").config()  //helps to access the .env file
const app=require("./src/app")
const connectToDB=require("./src/c")



app.listen(3000,()=>{
    console.log("server is running on port 3000")
})