let dbConnect = require("../mongodb");
let express = require(`express`);
let mongodb = require(`mongodb`);
let app = express();

// ! get is used to read data
app.get(`/`, async (req, resp) => {
  let data = await dbConnect();
  let response = await data.find().toArray();
  resp.send(response);
});

// ! post is used to add data
// ? use to revice data from postman
app.use(express.json());
app.post(`/`, async (req, resp) => {
  //   console.log(req.body);
  let data = await dbConnect();

  // ? req.body?
  // **  it is data we send data from react or postman (used to recive it )
  let Adddata = await data.insertOne(req.body);
  resp.send(Adddata);
});

// ! put is used to update api
app.put("/", async (req, resp) => {
  let data = await dbConnect();
  let UpdateData = await data.updateMany(
    // **static
    // { mobile: "iphone" },

    // **Dynamic
    { mobile: req.body.mobile },
    { $set: req.body }
  );
  resp.send(UpdateData);
});

// ! delete is used to delete api

// ?id is sent dynamycally from postman / react
app.delete("/:id", async (req, resp) => {
  let data = await dbConnect();
  let deleteOne = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(deleteOne);
});

app.listen(5000);
