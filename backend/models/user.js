const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const schema=new mongoose.Schema({
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
    phoneNumber:{
        type:String,
    },
    addressess:[
        {
            country:{
                type:String,
            },
            city:{
                type:String,
            },
            address1:{
                type:String,
            },
            address2:{
                type:String,
            },
            zipCode:{
                type:String
            },
            addressType:{
                type:String
            }
        }
       

    ],
    avatar:{
type:String
    },
    role:{
        type:String,
        default:"user"
    }
},{timestamps:true})
schema.methods.getJwtToken=function (){
    return jwt.sign({id:this._id},process.env.JWT_TOKEN_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    })
}
module.exports=mongoose.model("User",schema)