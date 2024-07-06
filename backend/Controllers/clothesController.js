const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  ProductID: Number,
  Name: String,
  Price: Number,
  Category: String,
  img: String,
});

module.exports = mongoose.model("clothes", productSchema);
