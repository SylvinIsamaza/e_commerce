const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
       
    },
    avatar:{
type:String
    }
})
schema.methods.getJwtToken=function (){
    return jwt.sign({id:this._id},process.env.JWT_TOKEN_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    })
}
module.exports=mongoose.model("User",schema)