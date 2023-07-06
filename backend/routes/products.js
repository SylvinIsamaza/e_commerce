const express = require("express");
const {
  createProduct,
  getProduct,
  deleteProduct,
  getAllProducts,
} = require("../controller/product");
const routes = express.Router();
const { upload } = require("../multer");
const catchAsyncError = require("../middleware/catchAsyncError");
const Shop = require("../models/shop");
const errorHandler = require("../utils/errrorHandler");
const Product = require("../models/product");
const { isSeller } = require("../middleware/auth");
routes.post("/create-product", upload.array("images"), createProduct);
routes.get("/all-products/:shopId", getProduct);
routes.get('/',getAllProducts)
routes.delete("/:id", isSeller, deleteProduct);

module.exports = routes;
