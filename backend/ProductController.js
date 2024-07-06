const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  Name: String,
  Price: Number,
  Category: String,
  Description: String,
  img: String,
});

module.exports = mongoose.model("AllProducts", productSchema);
