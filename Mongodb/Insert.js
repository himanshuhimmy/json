let dbConnect = require(`./mongodb`);

async function insertData() {
  let data = await dbConnect();
  let response = await data.find({}).toArray();
  console.log(response);

  //   ! if you want to insert one obj
  // ** use inserOne

  // ! for multiple objs (array of objs)
  // ** use insertMany

  let newData = await data.insertMany([
    {
      mobile: `vivo`,
      price: `900`,
      type: `android`,
    },
    {
      mobile: `sony`,
      price: `600`,
      type: `android`,
    },
    {
      mobile: `iphone air`,
      price: `1400`,
      type: `ios`,
    },
  ]);
  console.log(newData);
}
insertData();
