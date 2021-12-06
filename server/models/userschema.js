const mongoose = require("mongoose");
const userschema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    confirm_password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const user = mongoose.model("user-details", userschema);
module.exports = user;
