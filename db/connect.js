const mongoose = require("mongoose");

const connectDb = (url) => {
  return mongoose.connect(url);
};

mongoose.set("strictQuery", false);

module.exports = connectDb;
