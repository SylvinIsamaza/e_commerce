const Shop = require("../models/shop");
const { isSeller } = require("../middleware/auth");
const { upload } = require("../multer");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const sendToken = require("../utils/jwtToken");
dotenv.config();
const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncError");
const errorHandler = require("../utils/errrorHandler");
const router = express.Router();
const bcrypt = require("bcrypt");
const lodash = require("lodash");
const fs = require("fs");
const isAuthenticated = require("../middleware/auth");
const { shopCreation, login, getSeller } = require("../controller/shop");

const route = express.Router();
route.post("/shop-creation", upload.single("file"), shopCreation);
route.post(
  "/activation",
  catchAsyncError((req, res, next) => {
    try {
      console.log(req.body);
      const { activationToken } = req.body;
      console.log(activationToken);

      try {
        const seller = jwt.verify(
          activationToken,
          process.env.JWT_TOKEN_SECRET
        );
        console.log(seller);
        const savedSeller = new Shop(
          lodash.pick(seller, [
            "name",
            "email",
            "password",
            "avatar",
            "zipCode",
            "phoneNumber",
            "address",
            "avatar",
          ])
        );
        console.log("created");
        savedSeller.save();
        sendToken(savedSeller, 201);
        return res.status(200);
      } catch (error) {
        next(new errorHandler(error.message, 500));
      }
    } catch (error) {}
  })
);
route.post("/login", login);
route.get("/get_seller", isSeller, getSeller);
module.exports = route;
