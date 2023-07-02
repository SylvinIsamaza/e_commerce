const catchAsyncError = require("../middleware/catchAsyncError");
const Shop = require("../models/shop");
const CouponCode = require("../models/couponCode");
const errorHandler = require("../utils/errrorHandler");
const fs = require("fs");
const createCouponCode = catchAsyncError(async (req, res, next) => {
  try {
    const couponCodeName = req.body.couponCodeName;
    const couponCode = await CouponCode.find({ name: couponCodeName });
    if (couponCode) {
      return next(new errorHandler("coupon code already exists", 400));
    } else {
      const coupon = await CouponCode.create(req.body);
      res.status(201).json({
        success: true,
        coupon,
      });
    }
  } catch (error) {
    return next(new errorHandler(error, 400));
  }
});
