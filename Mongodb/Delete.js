let dbConnect = require(`./mongodb`);

async function deleteData() {
  let data = await dbConnect();

  // ! to delete one data  deleteOne
  let deleteOne = await data.deleteOne({ mobile: `vivo` });
  console.log(deleteOne);

  // ! to delete multiple data  deleteMany
}

deleteData();
