const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("Connected to DB");
  return mongoose.connect(uri);
  //     {
  //     useNewUrlParser: true,
  //     useUndefinedTopology: true,
  //   }
  //   
};

module.exports = connectDB;
