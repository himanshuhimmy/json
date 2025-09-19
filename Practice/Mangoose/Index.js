let express = require(`express`);
let app = express();
require(`./Config`);
app.use(express.json());
let products = require(`./Products`);

// get data from db
app.get(`/get`, async (req, resp) => {
  let data = await products.find({});
  resp.send(data);
});

// post addd new data
app.post(`/post`, async (req, resp) => {
  let data = new products(req.body);
  let result = await data.save();
  resp.send(result);
  console.log(req.body);
});

// update exisiting data
app.put(`/update/:brand`, async (req, resp) => {
  // ! upadteMany to update multiple data
  let data = await products.updateOne(req.params, {
    $set: req.body,
  });
  console.log(req.params);
  resp.send(data);
});

app.delete(`/delete/:model`, async (req, resp) => {
  let data = await products.deleteOne(req.params);
  resp.send(data);
});

// delete from data

app.listen(4000);
