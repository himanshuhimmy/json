let dbConnect = require(`./mongodb`);

async function updateData() {
  let data = await dbConnect();
  let response = await data.find().toArray();

  //   ! if you want to update one data
  // ** use updateOne
  let UpdatedData = await data.updateOne(
    { mobile: `mocromax` },
    { $set: { mobile: `micromax`, price: `800` } }
  );
  console.log(UpdatedData);

  // ! for multiple multiple (array of objs)
  // ** use updateMany
  let UpdatedManyData = await data.updateMany(
    { mobile: `redmi` },
    { $set: { mobile: `Redmi`, price: `1100` } }
  );
  console.log(UpdatedManyData);
}
updateData();
