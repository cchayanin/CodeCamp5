## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)

```
function random(min, max) {
  return Math.random() * (max - min) + min;
}
```
