/* blacklist is used to block tokens that are no longer valid . used in logout*/

const mongoose=require("mongoose")

const blacklistTokenSchema=new mongoose.Schema({
    token:{
        type:String,    
        required:[true,"token is required to be added in blacklist"]    
    }
},{
    timestamps:true
})

const tokenBlacklistModel=mongoose.model("blacklistTokens",blacklistTokenSchema)

module.exports=tokenBlacklistModel  