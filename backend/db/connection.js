const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGODB_URL;
const connectToDb = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("connection established");
    })
    .catch((err) => console.log("connection failed" + err));
};
module.exports = connectToDb;
