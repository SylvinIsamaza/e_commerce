const catchAsyncError = require("../middleware/catchAsyncError");
const Shop = require("../models/shop");
const Product = require("../models/product");
const errorHandler = require("../utils/errrorHandler");
const fs = require("fs");
const createProduct = catchAsyncError(async (req, res, next) => {
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
});
const getProduct = catchAsyncError(async (req, res, next) => {
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
});
const deleteProduct = catchAsyncError(async (req, res, next) => {
  try {
    const { id } = req.params;
    const productToBeDeleted = await Product.findById(id);
    // console.log(productToBeDeleted);
    productToBeDeleted.images.forEach((image) => {
      const filename = image;
      const path = `uploads/${filename}`;
      fs.unlink(path, (err) => {
        console.log(err);
      });
    });

    // const filePath = productToBeDeleted.images[0];
    // console.log(filePath);
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
});
module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
};
