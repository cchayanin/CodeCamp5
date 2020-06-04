const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/result", (req, res) => {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  res.send(`${a + b}`);
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
