## CodeCamp # 5

## ชญานิน ชลหาญ

### โจทย์ Lab 1
- ที่เว็บ http://localhost:5555/bye
- ให้แสดงคำว่า “Good bye”

```javascript
const express = require("express");
const app = express();
const PORT = 5555;

app.get("/bye", sayGoodBye);
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});

function sayGoodBye(req, res) {
  res.send("Good bye");
}
```

### โจทย์ Lab 2
- เปลี่ยนมาทำให้รองรับ Post
- เปลี่ยนมาทำให้รองรับ Put
- เปลี่ยนมาทำให้รองรับ Delete
```javascript
const express = require("express");
const app = express();
const PORT = 5555;

app.get("/bye", sayGoodBye);

// * prepare for post put delete
app.post("/bye", () => {});
app.put("/bye", () => {});
app.delete("/bye", () => {});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});

function sayGoodBye(req, res) {
  res.send("Good bye");
}
```