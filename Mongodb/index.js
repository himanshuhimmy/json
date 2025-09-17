let dbConnect = require(`./mongodb`);

async function showData() {
  let data = await dbConnect();
  let response = await data.find({}).toArray();

  console.log(response);
}

showData();
