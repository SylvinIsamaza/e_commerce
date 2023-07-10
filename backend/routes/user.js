const User = require("../models/user");
const { createUser, login, getUser, updateUser, updateAvatar, updateAddress, changePassword, deleteAddress } = require("../controller/user");
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
const { isAuthenticated } = require("../middleware/auth");

router.post("/create_user", upload.single("file"), createUser);
router.get("/home", (req, res) => {
  res.send("this is homepage");
});
router.post(
  "/activation",
  catchAsyncError((req, res, next) => {
    try {
      const {activationToken} = req.body;
      console.log(activationToken)

      try {
        const user = jwt.verify(activationToken, process.env.JWT_TOKEN_SECRET);
        console.log(user);
        const savedUser = new User(
          lodash.pick(user, ["name", "email", "password", "avatar"])
        );
        console.log("created");
        savedUser.save();
        sendToken(savedUser, 201);
        return res.status(200);
      } catch (error) {
        next(new errorHandler(error.message, 500));
      }
    } catch (error) {}
  })
);
router.post("/login", login);
router.get("/get_user", isAuthenticated, getUser);
router.get(
  "/logout",
  isAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
      res.status(201).json({
        success: true,
        message: "Logout successfully",
      });
    } catch (error) {
      console.log(error);
      return next(new errorHandler(error.message, 500));
    }
  })
);
router.put("/update_user",isAuthenticated,updateUser);
router.put("/update_address",isAuthenticated,updateAddress);
router.put("/update_avatar",upload.single("file"),updateAvatar)
router.put("/change_password",isAuthenticated,changePassword)
router.delete("/delete_address/:id",isAuthenticated,deleteAddress)
module.exports = router;
