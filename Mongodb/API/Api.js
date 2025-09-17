let dbConnect = require("../mongodb");
let express = require(`express`);
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

  //   ! req.body?
  // **  it is data we send data from react or postman (used to recive it )
  let Adddata = await data.insertOne(req.body);
  resp.send(Adddata);
});

app.listen(5000);
