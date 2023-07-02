const catchAsyncError = require("../middleware/catchAsyncError");
const Shop = require("../models/shop");
const Event = require("../models/events");
const errorHandler = require("../utils/errrorHandler");
const fs = require("fs");
const createEvent = catchAsyncError(async (req, res, next) => {
  try {
    const shopId = req.body.shopId;
    const shop = await Shop.findById(shopId);
    if (!shop) {
      return next(new errorHandler("invalid shop Id", 400));
    } else {
      const files = req.files;

      const imageUrl = files.map((file) => file.filename);

      const eventData = req.body;
      eventData.images = imageUrl;

      eventData.shop = shop;
      console.log(eventData);
      const event = await Event.create(eventData);
      res.status(201).json({
        success: true,
        event,
      });
    }
  } catch (error) {
    return next(new errorHandler(error, 400));
  }
});
const getEvent = catchAsyncError(async (req, res, next) => {
  try {
    const events = await Event.find({ shopId: req.params.shopId });
    console.log(events);
    res.status(201).json({
      success: true,
      events,
    });
  } catch (error) {
    return next(new errorHandler(error, 400));
  }
});
const deleteEvent = catchAsyncError(async (req, res, next) => {
  try {
    const { id } = req.params;
    const eventToBeDeleted = await Event.findById(id);
    console.log("event to be deleted" + eventToBeDeleted);
    eventToBeDeleted.images.forEach((image) => {
      const filename = image;
      console.log(filename);
      const path = `uploads/${filename}`;
      fs.unlink(path, (err) => {
        console.log(err);
      });
    });

    await Event.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({
          success: true,
          message: "event deleted successfully",
        });
      })
      .catch((err) => next(new errorHandler("something went wrong", 400)));
  } catch (error) {
    return next(new errorHandler(error, 400));
  }
});
module.exports = {
  createEvent,
  getEvent,
  deleteEvent,
};
