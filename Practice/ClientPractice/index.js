let express = require(`express`);
const mongoose = require("mongoose");
let cors = require("cors");
let client = require(`./Client`);

let app = express();
app.use(express.json());
require(`./Config`);
app.use(cors());

app.get(`/get`, async (req, resp) => {
  let data = await client.find();
  resp.send(data);
});

app.post(`/post`, async (req, resp) => {
  let data = await client(req.body);
  let response = await data.save();
  resp.send(response);
});

app.put(`/update/:id`, async (req, resp) => {
  let { id } = req.params;
  let result = await client.updateOne(
    { _id: new mongoose.Types.ObjectId(id) },
    { $set: req.body }
  );
  resp.send(result);
});

app.delete(`/delete/:name`, async (req, resp) => {
  let data = await client.deleteOne(req.params);
  resp.send(data);
  console.log(data);
});
app.listen(4000);
