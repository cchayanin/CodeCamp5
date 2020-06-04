const express = require("express");
const app = express();

const PORT = 3000;
// * a
app.get("/static", (req, res) => {
  res.send("Hello World");
});

// * b
app.get("/staticJSON", (req, res) => {
  let jsonObj = { text: "Hello World" };
  res.send(jsonObj);
});

// * c
app.get("/echo", (req, res) => {
  res.send(req.query.text);
});

// * d
app.get("/plus", (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  res.send(`${a + b}`);
});

// * e
app.get("/plusbyjson", (req, res) => {
  let jsonObj = JSON.parse(req.query.jsonText);
  res.send(`${jsonObj.a + jsonObj.b}`);
});

// * f
app.get("/plus/:a/:b", (req, res) => {
  let a = parseInt(req.params.a);
  let b = parseInt(req.params.b);
  res.send(`${a + b}`);
});

// * g
app.get("/checkEvenNumber/:numberInput", (req, res) => {
  if (parseInt(req.params.numberInput) % 2 === 0) {
    res.send(`${true}`);
  } else {
    res.send(`${false}`);
  }
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
