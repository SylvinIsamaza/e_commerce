const express = require("express");
const {
  createCouponCode,
  getAllCouponCode,
} = require("../controller/couponCode");

const router = express.Router();
router.post("/create-coupon-code", createCouponCode);
router.get("/all-couponCodes/:shopId", getAllCouponCode);
module.exports = router;
