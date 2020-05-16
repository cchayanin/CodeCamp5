const express = require("express");
const router = express.Router();

router.get("/add/:a/:b", function (req, res) {
  let a = parseInt(req.params.a);
  let b = parseInt(req.params.b);
  res.send(`${a + b}`);
});

module.exports = router;
