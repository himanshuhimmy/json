let express = require(`express`);
let app = express();
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
app.put(`/put/:field/:data`, async (req, resp) => {
  let { field, data } = req.params;

  const filter = { [field]: data };
  const update = { $set: req.body };

  const response = await clients.updateOne(filter, update);
  resp.send(response);
});

app.delete(`/delete/:name`, async (req, resp) => {
  let data = await clients.deleteOne(req.params);
  resp.send(data);
});

app.listen(8000);
