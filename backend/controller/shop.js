const Shop = require('../models/shop')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const sendToken = require('../utils/jwtToken')
dotenv.config()
const express = require('express')
const catchAsyncError = require('../middleware/catchAsyncError')
const errorHandler = require('../utils/errrorHandler')
const router = express.Router()
const bcrypt = require('bcrypt')
const lodash = require('lodash')
const fs = require('fs')
const isAuthenticated = require('../middleware/auth')


async function shopCreation(req, res, next) {
    try {
        const {email,name,password,address,zipCode,phoneNumber} = req.body;
        const sellerEmail = await Shop.findOne({email: email})
        if (sellerEmail) {
            const fileName = req.file.filename;
            const filePath = `uploads/${fileName}`
            fs.unlink(filePath, (err) => {
                console.log(err)
                if (err) {
                    res.status(500).send({message: "error while deleting the file"})
                }
                return next(new errorHandler("Shop already exists", 400))
            })
        }
        const fileName = req.file.filename
        const filePath = path.join(fileName)
const seller={
    email,
    password,
    name,
    address,
    zipCode,
    phoneNumber
}
const activationToken=activateToken(seller)
const activationUrl = `http://localhost:3000/shop/activation/${activationToken}`
await sendMails({email: user.email, subject: 'Activate your account', text: `Hello ${
    user.name
} click on the following link to activate your shop account: ${activationUrl}`})
console.log('activation link was sent successfully')
console.log(activationUrl)
return res.status(201).json({message: `please check your shop ${
    seller.email
} activation link was sent successfully  `})

    } catch (error) {
        return next(new errorHandler(error.message, 400))
    }
}
const activateToken = (seller) => {
    const token = jwt.sign(seller, process.env.JWT_TOKEN_SECRET, {expiresIn: '5m'})

    return token
}
module.exports = {
    shopCreation
}
