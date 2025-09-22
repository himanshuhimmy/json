let mongoose = require(`mongoose`);

let clientSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    mobile: String,
    resides: String,
  },
  { collection: `clientData` }
);

let model = mongoose.model(`clientData`, clientSchema);

module.exports = model;
