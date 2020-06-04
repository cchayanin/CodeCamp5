## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่

```javascript
function ucFirst(string) {
  return string[0].toUpperCase() + string.substring(1);
}
```

### 2. เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false

```javascript
function checkSpam(string) {
  let spam = ["xxx", "viagra"];
  for (let word of spam) {
    if (string.includes(word)) return true;
  }
  return false;
}
```

### 3. เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”

```javascript
function truncate(str, maxlength) {
  let strLength = str.length;
  if (strLength <= maxlength) return str;
  else return str.substring(0, maxlength - 1) + "…";
}
```

### 4. เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง rate จาก parameters ตัวที่สอง ที่ส่งมาให้

```javascript
function extractCurrencyValue(string, rate) {
  if (isNaN(parseFloat(string))) string = string.substr(1);
  return parseFloat(string) * rate;
}
```
