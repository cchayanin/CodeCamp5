## CodeCamp # 5

## ชญานิน ชลหาญ

**โจทย์ Lab**
- แสดง ‘dog walk’   ที่ http://localhost:3000/dog/walk/
- แสดง ‘dog play’   ที่ http://localhost:3000/dog/play/
- แสดง ‘cat eat’    ที่ http://localhost:3000/cat/eat/
- แสดง ‘cat sleep’  ที่ http://localhost:3000/cat/sleep/

*app.js*
```javascript
const express = require("express");
const app = express();

const actionRoutes = require("./actionRoutes");

const PORT = 3000;

app.use("/dog", actionRoutes);
app.use("/cat", actionRoutes);

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
```

*actionRoutes.js*
```javascript
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
```