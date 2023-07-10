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
        res.status(500).json({ message: "error while deleting file" });
      } else {
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
      user: lodash.pick(user, ["id", "name", "email", "avatar","phoneNumber","addressess",]),
    });
  } catch (error) {
    return error;
  }
});
const updateUser = catchAsyncError(async (req, res, next) => {
  const id = req.user.id;
  const { email, name, password, phoneNumber } = req.body;
console.log(phoneNumber)
  try {
    const userExists = await User.findById(id);
    if (userExists) {
      bcrypt
        .hash(password?password:userExists.password, 10)
        .then(async (hashedPassword) => {
          const updatedUser = await User.findByIdAndUpdate(id, {
            email,
            password: hashedPassword,
            name,
            phoneNumber,
          });
          console.log(updatedUser)
          return res.status(200).json({
            success: true,
            message: "User updated successfully",
           
          });
        })
        .catch((error) => next(new errorHandler(error, 400)));
    } else {
      return next(new errorHandler("User not found", 400));
    }
  } catch (error) {
    return next(new errorHandler(error, 400));
  }
});
const updateAvatar = catchAsyncError(async (req, res, next) => {
  const id = req.body.id;
  console.log(id)
  console.log(req.file)
  const fileName = req.file.filename;
  console.log(fileName)
  const filePath = path.join(fileName);

  try {
    const userToBeUpdated = await User.findById(id);
    const deletedFile = userToBeUpdated.avatar;
    //this is the path of the file to be deleted
    const deletedFIlePath = `uploads/${deletedFile}`;
    
    fs.unlink(deletedFIlePath, async (error) => {
      if (error) {
        return next(new errorHandler("file not deleted", 500));
      } else {
        await User.findByIdAndUpdate(id,{ avatar: filePath })
          .then(() => {
            console.log('successfully updated')
            return res.status(200).json({
              success: true,
              message: "Successfully updated",
            
            });
          })
          .catch((err) => next(new errorHandler(err, 400)));
      }
    });
  } catch (error) {
    return next(new errorHandler(error, 400));
  }
});
const updateAddress=catchAsyncError(async(req,res,next)=>{

  try {
    const user=await User.findById(req.user.id);
    const sameTypeAddress=user.addressess.find((address)=>address.addressType===req.body.addressType
    )
    if(sameTypeAddress){
      return next (new errorHandler('Address already exists',400))
    }
    const existAddress= user.addressess.find(address=>address._id=req.body._id);
    if(existAddress){
      Object.assign(user,req.body);
    }
    else{
      user.addressess.push(req.body);
    }
    await user.save()
    res.status(201).json({
      success:true,
      user
    })
  } catch (error) {
    return next (new errorHandler(error.message,500))
  }
})
const changePassword=catchAsyncError(async(req,res,next)=>{
  console.log(req.body)
  const{oldPassword,newPassword,confirmPassword}=req.body
  console.log(oldPassword)
  if(newPassword!=confirmPassword){
    return next(new errorHandler("Password does not match",400));
  }
  else{
    const user=await User.findById(req.user.id);
    
    const passwordMatch=await bcrypt.compare(oldPassword,user.password)
    console.log(passwordMatch)
    if(!passwordMatch){
      return next(new errorHandler("Incorrect password",400));
    }
    else{
      bcrypt.hash(newPassword,10).then(async(hashedPassword)=>{
        await User.findByIdAndUpdate(req.user.id,{password:hashedPassword}).then((data)=>{
          return res.status(200).json({
            success:true,
            user
          })
        }).catch(err=>next(new errorHandler("something went wrong",err)))
      })
      
    }
  }

})
const deleteAddress=catchAsyncError(async(req,res,next)=>{
  try {
    const userId=req.user.id;
    const addressId=req.params.id;
    console.log(addressId)
    await User.findByIdAndUpdate(userId,{$pull:{addressess:{_id:addressId}}}).then(async(data)=>{
 const user=await User.findById(userId);
 return res.status(200).json({
  success:true,
  user:data
 })

    }).catch(err=>next(new errorHandler('user not found',400)))
  } catch (error) {
    return next (new errorHandler(error,500))
  }


})
module.exports = { createUser, login, getUser, updateUser, updateAvatar ,updateAddress,changePassword,deleteAddress};
