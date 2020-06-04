## CodeCamp # 5

## ชญานิน ชลหาญ

**โจทย์ Lab**
- แสดงรูปอะไรก็ได้ที่ localhost:3000/picture.png
- นอกจากนั้น ให้แสดงคำว่า “404 Not Found”

- Optional: ไม่ว่าจะเข้าที่ไหนใน localhost:3000/user
- ให้แสดงคำว่า “404 User Not Found”

```javascript
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
```