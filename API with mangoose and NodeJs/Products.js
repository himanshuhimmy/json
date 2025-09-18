const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  mobile: String,
  price: Number,
  type: String,
});

let Model = mongoose.model(`products`, productSchema);

module.exports = Model;
