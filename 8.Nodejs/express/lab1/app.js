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
