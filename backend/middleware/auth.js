const errorHandler=require('../utils/errrorHandler')
const catchAsyncErrors=require('./catchAsyncError')
const jwt=require('jsonwebtoken')


const User=require('../models/user')
const { request } = require('express')
const shop = require('../models/shop')

async function isAuthenticated(req, res, next) {
const {token}=req.cookies


try {
    const decoded= jwt.verify(token,process.env.JWT_TOKEN_SECRET)
    req.user=await User.findById( decoded.id)    
    next()
} catch (error) {
    console.log(error)
    return res.status(400).send(error.message)
}
}
async function isSeller(req,res,next){
const {seller_token}=req.cookies

try {
    const decodedToken=jwt.verify(seller_token,process.env.JWT_TOKEN_SECRET)
    console.log(decodedToken)
    req.seller=await shop.findById(decodedToken.id)
    
    next()
} catch (error) {

   return res.status(404).send(error.message) 
}
}
module.exports={isAuthenticated,isSeller}