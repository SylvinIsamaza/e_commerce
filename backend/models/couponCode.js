const mongoose = require("mongoose");
const couponCodeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your coupon code name"],
      unique: true,
    },
    minAmount: {
      type: Number,
    },
    maxAmount: {
      type: Number,
    },
    shop: {
      type: Object,
      required: [true, "please enter your shop"],
    },
  },
  { timestamps: true }
);
