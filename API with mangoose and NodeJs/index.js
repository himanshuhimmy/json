let express = require(`express`);
require(`./Config`);
let products = require(`./Products`);
let app = express();
app.use(express.json());

app.post(`/create`, async (req, resp) => {
  let data = new products(req.body);
  let result = await data.save();
  resp.send(result);
});

app.get(`/list`, async (req, resp) => {
  let data = await products.find({});
  resp.send(data);
});

app.delete(`/delete/:_id`, async (req, resp) => {
  let data = await products.deleteOne(req.params);
  resp.send(data);
});

app.put(`/update/:_id`, async (req, resp) => {
  let data = await products.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});
app.listen(5000);
