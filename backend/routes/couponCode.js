const express = require("express");
const {
  createCouponCode,
  getAllCouponCode,
  verifyCouponCode,
} = require("../controller/couponCode");

const router = express.Router();
router.post("/create-coupon-code", createCouponCode);
router.get("/all-couponCodes/:shopId", getAllCouponCode);
router.post("/verifyCouponCode",verifyCouponCode);
module.exports = router;
