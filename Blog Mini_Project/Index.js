require(`./Config`);
let express = require(`express`);
let mongoose = require(`mongoose`);
let blogs = require(`./Blogs`);
let cors = require("cors");

let app = express();
app.use(express.json());
app.use(cors());

app.get(`/get`, async (req, resp) => {
  let data = await blogs.find();
  resp.send(data);
});

app.get(`/get/:id`, async (req, resp) => {
  let data = await blogs.find({ _id: req.params.id });
  resp.send(data);
});

app.put(`/update/:id`, async (req, resp) => {
  let data = await blogs.updateOne(
    { _id: new mongoose.Types.ObjectId(req.params.id) },
    { $set: req.body }
  );
  resp.send(data);
});

app.post(`/post`, async (req, resp) => {
  let data = new blogs(req.body);
  let response = await data.save();
  resp.send(response);
  console.log(data);
});

app.delete(`/delete/:id`, async (req, resp) => {
  let data = await blogs.deleteOne({ _id: req.params.id });
  resp.send(data);
});

app.listen(7000);
