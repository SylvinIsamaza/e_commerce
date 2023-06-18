const errorHandler=require('../utils/errrorHandler')
const catchAsyncErrors=require('./catchAsyncError')
const jwt=require('jsonwebtoken')


const User=require('../models/user')

async function isAuthenticated(req, res, next) {
const {token}=req.cookies


try {
    const decoded= jwt.verify(token,process.env.JWT_TOKEN_SECRET)
    req.user=await User.findById( decoded.id)    
    next()
} catch (error) {
    return res.status(400).send("please login to continue")
}
}
module.exports=isAuthenticated