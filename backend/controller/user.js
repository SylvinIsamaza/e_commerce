const User = require("../models/user");
const errorHandler = require("../utils/errrorHandler");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMails = require("../utils/sendMail");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const dotenv = require("dotenv");
dotenv.config();
const lodash = require("lodash");

async function createUser(req, res, next) {
  const { name, email, password } = req.body;
  const emailFound = await User.findOne({ email: email });
  if (emailFound) {
    const filename = req.file.filename;
    const filePath = `uploads/${filename}`;
    await fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "error while deleting file" });
      } else {
        console.log({ message: "file deleted successfully" });
      }
    });
    return next(new errorHandler("user with that email already exists", 400));
  }
  const filename = req.file.filename;
  const fileUrl = path.join(filename);
  await bcrypt
    .hash(password, 10)
    .then(async (hashedPassword) => {
      const user = {
        name,
        email,
        password: hashedPassword,
        avatar: fileUrl,
      };

      const activationToken = activateToken(user);
      const activationUrl = `http://localhost:3000/activation/${activationToken}`;

      try {
        await sendMails({
          email: user.email,
          subject: "Activate your account",
          text: `Hello ${user.name} click on the following link to activate your account: ${activationUrl}`,
        });
        console.log("activation link was sent successfully");
        console.log(activationUrl);
        return res.status(201).json({
          message: `please check your ${user.email} activation link was sent successfully  `,
        });
      } catch (error) {
        console.log(error);
        return next(new errorHandler(error.message, 400));
      }
    })
    .catch((err) => {
      const token = user.getJwtToken();
      console.log(err);
    });
}
const activateToken = (user) => {
  const token = jwt.sign(user, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "5m",
  });

  return token;
};

const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      console.log("incorrect email or password");
      return next(
        new errorHandler("please provide the required credentials", 400)
      );
    } else {
      const user = await User.findOne({ email: email });
      // console.log(user)
      if (!user) {
        return next(new errorHandler("incorrect email or password", 400));
      } else {
        const isPassCorrect = await bcrypt.compare(password, user.password);
        if (isPassCorrect) {
          3000;
          console.log("success");
          user && sendToken(user, 200, res);

          // res.setHeader('Set-Cookie',`token=${data.token}`,options)

          // return res.status(200).send(user)
        } else {
          // console.log('incorrect password')
          return next(new errorHandler("incorrect email or password", 400));
        }
      }
    }
  } catch (error) {}
});

const getUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  try {
    return res.send({
      status: 200,
      success: true,
      user: lodash.pick(user, ["id", "name", "email", "avatar"]),
    });
  } catch (error) {
    return error;
  }
});

module.exports = { createUser, login, getUser };
