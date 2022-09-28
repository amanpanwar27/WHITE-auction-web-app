const mongoose = require("mongoose");
const roomschema = mongoose.Schema(
  {
    roomname: {
      type: String,
      require: true,
    },
    maxbid: {
      type: String,
      require: true,
    },
    totalparticipants: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const room = mongoose.model("roomdetails", roomschema);
module.exports = room;
