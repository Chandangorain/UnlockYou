const mongoose=require("mongoose")

// Create a schema (structure) for User collection
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username already taken"],    // Ensures username is unique in database
        // If duplicate is found, it throws this custom error message
        required: true,    // Makes this field mandatory
    },

    email:{
        type:String,
        unique:[true,"Account already exist with this email"],
        required: true,

    },

    password:{
        type:String,
        unique:[true,"username already taken"],
        required: true,
    }

})

const userModel=mongoose.model("users",userSchema)          //It is creating a Model. for crud operation

module.exports=userModel