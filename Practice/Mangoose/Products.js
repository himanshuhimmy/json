let mongoose = require(`mongoose`);

let productSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  year: Number,
});

let model = mongoose.model(`products`, productSchema);

module.exports = model;
