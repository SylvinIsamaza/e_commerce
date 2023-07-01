const Shop = require("../models/shop");
const sendSellerToken = (user, statusCode, res) => {
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 1000),
    httpOnly: true,
    secure: false,
    path: "/",
  };
  console.log(user);
  const token = user.getJwtToken();

  return res
    .cookie("seller_token", token, options)
    .send(user)
    .status(statusCode);
};
module.exports = sendSellerToken;
