let mongoose = require(`mongoose`);

let productSchema = new mongoose.Schema({
  mobile: String,
  price: Number,
  type: String,
});

let model = mongoose.model(`products`, productSchema);
module.exports = model;
