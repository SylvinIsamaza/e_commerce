const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const shopSchema=new mongoose.Schema({
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
    address:{
        type:String,
        required:true
    },
    
    role:{
        type:String,
        default:"seller"
    },
    zipCode:{
type:Number,
required:true


    },
    phoneNumber:{
        type:Number
    },
    description:{
        type:String,
    
    },
    avatar:{
type:String
    },

    
},{timestamps:true})
shopSchema.methods.getJwtToken=function (){
    return jwt.sign({id:this._id},process.env.JWT_TOKEN_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    })
}
module.exports=mongoose.model("shopSchema",shopSchema)