const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your event product name!"],
    },
    description: {
      type: String,
      required: [true, "Please enter your event product description!"],
    },
    category: {
      type: String,
      required: [true, "Please enter your event product cateory!"],
    },
    finishDate: {
      type: Date,
      required: true,
    },
    startDate: {
      type: Date,
      default: new Date(Date.now()),
    },
    status: {
      type: String,
      default: "Running",
    },
    tags: {
      type: String,
      required: [true, "Please enter your event product tags!"],
    },
    originalPrice: {
      type: Number,
    },
    discountPrice: {
      type: Number,
      required: [true, "Please enter your event product discountPrice!"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter your event product stock!"],
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    shopId: {
      type: String,
      required: [true, "Please enter your shop ID!"],
    },
    shop: {
      type: Object,
      required: true,
    },
    soldOut: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("events", eventSchema);
