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
