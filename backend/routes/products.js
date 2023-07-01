const express = require("express");

const routes = express.Router();
const { upload } = require("../multer");
const catchAsyncError = require("../middleware/catchAsyncError");
const Shop = require("../models/shop");
const errorHandler = require("../utils/errrorHandler");
const Product = require("../models/product");
const { isSeller } = require("../middleware/auth");
routes.post(
  "/create-product",
  upload.array("images"),
  catchAsyncError(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new errorHandler("invalid shop Id", 400));
      } else {
        const files = req.files;

        const imageUrl = files.map((file) => file.filename);

        const productData = req.body;
        productData.images = imageUrl;
        productData.shop = shop;
        const product = await Product.create(productData);
        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new errorHandler(error, 400));
    }
  })
);
routes.get(
  "/all-products/:shopId",
  catchAsyncError(async (req, res, next) => {
    try {
      const products = await Product.find({ shopId: req.params.shopId });
      console.log(products);
      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new errorHandler(error, 400));
    }
  })
);
routes.delete(
  "/:id",
  isSeller,
  catchAsyncError(async (req, res, next) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id)
        .then(() => {
          res.status(200).json({
            success: true,
            message: "Product deleted successfully",
          });
        })
        .catch((err) => next(new errorHandler("something went wrong", 400)));
    } catch (error) {
      return next(new errorHandler(error, 400));
    }
  })
);

module.exports = routes;
