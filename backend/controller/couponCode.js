const catchAsyncError = require("../middleware/catchAsyncError");

const Shop = require("../models/shop");
const CouponCode = require("../models/couponCode");
const errorHandler = require("../utils/errrorHandler");
const fs = require("fs");
const couponCode = require("../models/couponCode");
const { Console } = require("console");
const createCouponCode = catchAsyncError(async (req, res, next) => {
  try {
    const couponCodeName = req.body.name;
    const couponCode = await CouponCode.findOne({ name: couponCodeName });

    if (couponCode) {
      return next(new errorHandler("coupon code already exists", 400));
    } else {
      const coupon = await CouponCode.create(req.body);
      console.log("this is coupon code" + coupon);
      res.status(201).json({
        success: true,
        coupon,
      });
    }
  } catch (error) {
    return next(new errorHandler(error, 400));
  }
});
const getAllCouponCode = catchAsyncError(async (req, res, next) => {
  const { shopId } = req.params;

  try {
    const couponCOde = await CouponCode.find({ "shop.shopId": shopId });
    if (!couponCOde) {
      return next(new errorHandler("coupon code not found", 400));
    } else {
      return res.status(200).json({
        success: true,
        couponCOde,
      });
    }
  } catch (error) {
    return next(new errorHandler(error, 400));
  }
});
const verifyCouponCode=catchAsyncError(async(req,res,next)=>{
  try {
    const {shopId,couponCode}=req.body;
  console.log(req.body)
const couponCodeExist=await CouponCode.findOne({name:couponCode})

if(couponCodeExist){
return res.status(200).json({
  success:true,
  couponCodeExist
})
}
else{
  return next(new errorHandler("Invalid coupon code",400))
}
  } catch (error) {
    return next(new errorHandler(error,500))
  }

})
module.exports = { createCouponCode, getAllCouponCode,verifyCouponCode };
