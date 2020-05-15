const express = require("express");
const app = express();

const actionRoutes = require("./actionRoutes");

const PORT = 3000;

app.use("/dog", actionRoutes);
app.use("/cat", actionRoutes);

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
