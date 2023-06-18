const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()
const User=require('../models/user')
const sendToken=(user,statusCode,res)=>{
   
        const options={
            expires:new Date(Date.now()+90*24*60*1000),
       httpOnly:true,
            secure:false,
            path:'/',
         
           
        
        }
    // console.log(user)
const token=user.getJwtToken()

 return res.cookie("token",token,options).send(user).status(statusCode)
// return res.send('user successfully signed')
// return ({statusCode, 
//      token ,
//     user,
// message:"successfully logged in"
// })
}
module.exports=sendToken