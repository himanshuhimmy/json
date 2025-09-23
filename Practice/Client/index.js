let express = require(`express`);
let app = express();
const mongoose = require("mongoose");
let cors = require("cors");
app.use(express.json());
require(`./Config`);
app.use(cors());
let clients = require(`./Client`);

app.get(`/get`, async (req, resp) => {
  let data = await clients.find();
  resp.send(data);
});

app.post(`/post`, async (req, resp) => {
  let data = await clients(req.body);
  let response = await data.save();
  resp.send(response);
});

// not working
app.put(`/put/:id`, async (req, resp) => {
  const { id } = req.params;
  const result = await clients.updateOne(
    { _id: new mongoose.Types.ObjectId(id) },
    { $set: req.body }
  );
  resp.send(result);
});

app.delete(`/delete/:name`, async (req, resp) => {
  let data = await clients.deleteOne(req.params);
  resp.send(data);
});

app.listen(8000);
