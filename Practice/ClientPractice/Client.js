let mongoose = require(`mongoose`);

let ClentSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    mobile: String,
    resides: String,
  },
  { collection: `clientData` }
);

let ClientModel = mongoose.model(`clientData`, ClentSchema);
module.exports = ClientModel;
