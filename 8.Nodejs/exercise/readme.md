## CodeCamp # 5

## ชญานิน ชลหาญ

### แบบฝึกหัด - Controller Only

**Lab 1**  
a. GET /static -> คืนค่าเป็น “Hello World”  
b. GET /staticJSON -> คืนค่าเป็น JSON ของ {text:”Hello World”}  
c. GET /echo?text=Heyyyy -> คืนค่าเป็น string ของตัวแปร text เช่น “Heyyyy”  
d. GET /plus?a=3&b=5 -> คืนค่าเป็นผลบวกของ a + b เช่น 8  
e. GET /plusByJSON?jsonText={"a":3,"b":5} -> คืนค่าเป็น ผลรวมของ a+b, parsed json object จากตัวแปร jsonText และคำตอบควรจะเป็น 8  
f. GET /plus/6/7 -> คืนค่าเป็น ผลบวกของ 6+7 ณ ที่นี้คือ 13  
g. GET /checkEvenNumber/3

```javascript
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
```

**Lab 2**  
1. Return the Bad input (400) response code if the input number is not even. (in this case, it is 3) thus it is return 400 response code.
2. Return the Success (200) response code if the input number is a even.
3. POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example
4. POST /number/1 -> [1]
5. POST /number/2 -> [1,2]
6. POST /number/5 -> [1,2,5]
7. DELETE /number/1, remove the number in the array
8. DELETE /number/1 -> [2,5]
9. DELETE /number/2 → [5]
10. PUT /number/5/10, change the number in the array
11. PUT /number/5/10 -> [10]
12. POST /countFields for counting the number of fields that submit via req.body (raw as the JSON object) for example,
13. POST /countFields BODY {“a”:1,”b”:2,”c”:3} -> 3
14. POST /countFields BODY {“a”:1,”b”:2,”c”:3,”d”:5} -> 4

```javascript
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

```