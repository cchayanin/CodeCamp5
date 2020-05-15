const express = require("express");
const router = express.Router();

router.get("/walk", playAction);
router.get("/play", playAction);
router.get("/eat", playAction);
router.get("/sleep", playAction);

function playAction(req, res) {
  res.send(`${req.baseUrl.slice(1)} ${req.path.slice(1)}`);
}

module.exports = router;
