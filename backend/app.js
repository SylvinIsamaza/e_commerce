const express = require("express");
const connectToDb = require("./db/connection");
const errorHandler = require("./utils/errrorHandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const shopRouter = require("./routes/shop");
const cors = require("cors");
const dotenv = require("dotenv");
const productRouter = require("./routes/products");
const eventRouter = require("./routes/events");
const couponCodeRouter = require("./routes/couponCode");
dotenv.config();
const app = express();
connectToDb();
app.use(
  cors({
    origin: ["https://e-commerce-nine-peach.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v2/user", userRouter);
app.use("/api/v2/shop", shopRouter);
app.use("/api/v2/product", productRouter);
app.use("/api/v2/event", eventRouter);
app.use("/api/v2/couponCode", couponCodeRouter);
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});

server.on("unhandledRejection", (error) => {
  console.log(`closing server due to ${error}`);
  console.log("closing server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
