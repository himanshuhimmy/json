let { MongoClient } = require(`mongodb`);

// ! `mongodb://localhost27017` why ?
// * if mongo is used in local (on pc) insted of online(atlas)
// ? then  this localhost is same for everyone
// * url is used to connect node js to mongodb
let url = "mongodb://localhost:27017";
let client = new MongoClient(url);

// ! e-comms  will be name of data base created on mongodb
let dataBase = "E-comms";

async function dbConnect() {
  let result = await client.connect();

  //   * to connect node to a specific data base from mongodb
  let db = result.db(dataBase);

  //   * to selecet specific folder or collection from data base
  return db.collection("products");
}

module.exports = dbConnect;
