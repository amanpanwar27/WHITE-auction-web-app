const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const itemschema = new mongoose.Schema({
  title: {
    type: String,
  },
  displayPicture: { type: String },
  Location: { type: String },
  OpeaningBid: { type: String },
  Sold: { type: String },
  Type: { type: String },
  seller: { type: String },
  conditions: { type: String },
  measurements: { type: String },
  description: { type: String },
  morepics: [
    {
      type: String,
    },
  ],
});
const item = mongoose.model("auction-item", itemschema);
module.exports = item;
