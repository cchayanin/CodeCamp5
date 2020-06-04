const express = require("express");
const app = express();
const router = express.Router();

const PORT = 3000;

const userRoute = router.get("*", (req, res) => {
  res.status(404).send("404 User Not Found");
});

app.use(express.static("./public"));
app.use("/user", userRoute);

app.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
