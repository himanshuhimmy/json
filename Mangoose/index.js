const mongoose = require("mongoose");

// !Schema = validation for allowed fields
const productSchema = new mongoose.Schema({
  mobile: String,
  price: Number,
  type: String,
});

async function SaveInDb() {
  // !to establish connesction with db
  await mongoose.connect("mongodb://localhost:27017/E-comms");

  //! Model connects Node.js and MongoDB using schema
  const ProductModel = mongoose.model("products", productSchema);

  //  Pass data to the model constructor
  const data = new ProductModel({
    mobile: "sony",
    price: 400,
    type: "android",
  });

  //  Save without arguments
  const result = await data.save();
  console.log(result);
}
//  SaveInDb()

// !Update data
async function updateInDb() {
  await mongoose.connect("mongodb://localhost:27017/E-comms");
  const ProductModel = mongoose.model("products", productSchema);

  let updatedData = await ProductModel.updateOne(
    { mobile: "sony" },
    { $set: { price: 900 } }
  );
  console.log(updatedData);
}
// updateInDb();

// !Delete db

async function deleteInDb(params) {
  await mongoose.connect("mongodb://localhost:27017/E-comms");
  const ProductModel = mongoose.model("products", productSchema);

  let DeleteOne = await ProductModel.deleteOne({ mobile: "sony" });

  console.log(DeleteOne);
}
// deleteInDb();
