let express = require(`express`);
require(`./config`);
let app = express();
let products = require(`./products`);
app.use(express.json());

app.get(`/search/:item`, async (req, resp) => {
  console.log(req.params.item);

  //   !  $regex used for matching searched name
  // ! $options used to compare char/num  (show match even if its case sesnitive  (smallcase == capital))

  //   for seraching single data
  let data = await products.find({
    mobile: { $regex: req.params.item, $options: "i" },
  });

  //   for multiple data
  //   let MultipleData = await products.find({
  //     $or: [
  //       { mobile: { $regex: req.params.item, $options: "i" } },
  //       { price: { $regex: req.params.item } },
  //     ],
  //   });

  resp.send(data);
});

app.listen(5000);
