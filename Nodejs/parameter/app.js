const express = require("express");
const app = express();

const userRoute = require("./userRoute");

const PORT = 3000;

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
