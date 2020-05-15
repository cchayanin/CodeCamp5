let express = require("express");
let router = express.Router();

router.get("/add/:a/:b", function (req, res) {
  let a = req.params.a;
  let b = req.params.b;
  res.send(a + b);
});

module.exports = router;
