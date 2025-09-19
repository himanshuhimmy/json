let express = require(`express`);
let multer = require(`multer`);
let app = express();

// ! waht is multer ?
// ** it is a middleWare usd to handle your data and UPlodad it
// ** supports uploading single and multiple files
// ** let u control file size and type

let upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cd) {
      //! first is always null second is where to upload a file
      cd(null, `UploadFile`);
    },
    filename: function (req, file, cd) {
        // ! why  Date.now() + "-" + file.originalname?
        // ** Multer does not keep og file name so to make it unique we use it 
      cd(null, Date.now() + "-" + file.originalname);
    },
  }),
}).single("user_file");

app.post(`/post`, upload, (req, resp) => {
  resp.send(`woeking`);
});
app.listen(5000);
