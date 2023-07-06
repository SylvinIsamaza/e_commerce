const Shop = require("../models/shop");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncError");
const errorHandler = require("../utils/errrorHandler");
const router = express.Router();
const bcrypt = require("bcrypt");
const lodash = require("lodash");
const fs = require("fs");
const path = require("path");
const isAuthenticated = require("../middleware/auth");
const sendMails = require("../utils/sendMail");
const sendSellerToken = require("../utils/shopjwtToken");

async function shopCreation(req, res, next) {
  try {
    const { email, name, password, address, zipCode, phoneNumber } = req.body;
    const sellerEmail = await Shop.findOne({ email: email });
    if (sellerEmail) {
      const fileName = req.file.filename;
      const filePath = `uploads/${fileName}`;
      fs.unlink(filePath, (err) => {
        console.log(err);
        if (err) {
          res.status(500).send({ message: "error while deleting the file" });
        }
        return next(new errorHandler("Shop already exists", 400));
      });
    }
    const fileName = req.file.filename;
    const filePath = path.join(fileName);
    const hashedPassword = await bcrypt
      .hash(password, 10)
      .then(async (hashedPassword) => {
        const seller = new shop({
          email,
          password: hashedPassword,
          name,
          address,
          zipCode,
          phoneNumber,
        });

        seller.save();
        const activationToken = activateToken(seller);
        const activationUrl = `http://localhost:3000/shop/activation/${activationToken}`;
        await sendMails({
          email: seller.email,
          subject: "Activate your account",
          text: `Hello ${seller.name} click on the following link to activate your shop account: ${activationUrl}`,
        });
        console.log("activation link was sent successfully");
        return res.status(201).json({
          message: `please check your shop ${seller.email} activation link was sent successfully  `,
        });
      });
  } catch (error) {
    return next(new errorHandler(error.message, 400));
  }
}
const activateToken = (seller) => {
  const token = jwt.sign(seller, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "5m",
  });

  return token;
};
async function login(req, res, next) {
  const { email, password } = req.body;
  const isShopEmail = await Shop.findOne({ email: email });

  try {
    if (!isShopEmail) {
      return next(new errorHandler("incorrect email or password", 500));
    }
    const shop = await Shop.findOne({ email: email })
      .then(async (shop) => {
        const isPassCorrect = await bcrypt.compare(password, shop.password);

        if (isPassCorrect) {
          sendSellerToken(shop, 200, res);
        }
      })
      .catch((err) => {
        res.send(err);

        return next(new errorHandler("incorrect email or password", 500));
      });
  } catch (error) {
    res.send(error);

    return next(new errorHandler(error.message, 500));
  }
}
const getSeller = catchAsyncError(async (req, res, next) => {
  const seller = await Shop.findById(req.seller.id);
  try {
    return res.send({
      status: 200,
      success: true,
      seller: lodash.pick(seller, [
        "id",
        "name",
        "email",
        "address",
        "zipCode",
        "phoneNumber",
        "createdAt",
        "avatar",
        "description",
        "createdAt",
      ]),
    });
  } catch (error) {
    return error;
  }
});
const logout = catchAsyncError((req, res, next) => {
  try {
    res.cookie("seller_token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(201).json({
      success: true,
      message: "Logout successfully",
    });
  } catch (error) {
    return next(new errorHandler(error.message, 500));
  }
});
  const getSellerById= catchAsyncError(async (req, res, next) => {
  const seller = await Shop.findById(req.params.id);
  try {
    return res.send({
      status: 200,
      success: true,
      seller: lodash.pick(seller, [
        "id",
        "name",
        "email",
        "address",
        "zipCode",
        "phoneNumber",
        "createdAt",
        "avatar",
        "description",
        "createdAt",
      ]),
    });
  } catch (error) {
    return error;
  }
});
module.exports = {
  shopCreation,
  login,
  getSeller,
  logout,
  getSellerById
};
