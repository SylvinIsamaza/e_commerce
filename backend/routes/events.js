const express = require("express");

const routes = express.Router();
const { upload } = require("../multer");
const catchAsyncError = require("../middleware/catchAsyncError");
const Shop = require("../models/shop");
const errorHandler = require("../utils/errrorHandler");

const { isSeller } = require("../middleware/auth");
const { createEvent, getEvent, deleteEvent, getAllEvent } = require("../controller/event");
routes.post("/create-event", upload.array("images"), createEvent);
routes.get("/all-events/:shopId", getEvent);
routes.delete("/:id", isSeller, deleteEvent);
routes.get('/',getAllEvent)

module.exports = routes;
