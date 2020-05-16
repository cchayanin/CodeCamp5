const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

let numberArray = [];

app.use(bodyParser.json());

app.get("/:inputNumber", checkEven);

app.post("/number/:input", manageArray);
app.delete("/number/:input", manageArray);
app.put("/number/:input/:modification", manageArray);

app.post("/countfields", countfields);

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});

function checkEven(req, res) {
  if (parseInt(req.params.inputNumber) % 2 === 0) {
    res.status(200).send(`${req.params.inputNumber} is an even number.`);
  } else {
    res.status(400).send(`${req.params.inputNumber} is not an even number.`);
  }
}

function manageArray(req, res) {
  if (req.method === "POST") {
    numberArray.push(parseInt(req.params.input));
  }
  if (req.method === "DELETE") {
    let index = numberArray.indexOf(parseInt(req.params.input));
    if (index > -1) numberArray.splice(index, 1);
  }
  if (req.method === "PUT") {
    let index = numberArray.indexOf(parseInt(req.params.input));
    if (index > -1)
      numberArray.splice(index, 1, parseInt(req.params.modification));
  }
  console.log(numberArray);
  res.send(numberArray);
}

function countfields(req, res) {
  let count = Object.entries(req.body).length;
  res.send(`${count}`);
}
