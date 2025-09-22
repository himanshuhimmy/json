let express = require(`express`);
let cors = require("cors");
let app = express();
app.use(cors());
app.use(express.json());

require(`./config`);
let products = require(`./products`);

app.get(`/get`, async (req, resp) => {
  let data = await products.find();
  resp.send(data);
});

app.post(`/post`, async (req, resp) => {
  let data = new products(req.body);
  let result = await data.save();
  resp.send(result);
});

app.delete(`/delete/:model`, async (req, resp) => {
  let data = await products.deleteOne(req.params);
  resp.send(data);
});

app.put(`/update/:model`, async (req, resp) => {
  let data = await products.updateOne(req.params, { $set: req.body });
  resp.send(data);
});
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
