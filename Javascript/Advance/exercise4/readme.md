## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. ให้ทำตามคำสั่งต่อไปนี้

- สร้าง Object เปล่าขึ้นมา
- เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
- เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
- เปลี่ยน properties name เป็น “Boy”
- ลบ properties name ออกจาก Object

```javascript
let obj = {};

obj.name = "Sonter";
obj.surname = "Pakorn";

obj.name = "Boy";

delete obj.name;
```

### 2. ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false

```javascript
function isEmpty(obj) {
  for (let _ in obj) return false;
  return true;
}
```

### 3. การเขียนข้างล่างต่อไปนี้ Error ไหม

```javascript
const user = {
  name: "John"
};

// does it work?
user.name = "Pete";
```

`ไม่ Error`

### 4. จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด

```javascript
function sum(obj) {
  let total = 0;

  for (let key in obj) {
    total = total + obj[key];
  }

  return total;
}
```

### 5. จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร

```javascript
function multiplyNumeric(obj, times) {
  for (let key in obj) {
    if (typeof obj[key] !== "number") continue;
    obj[key] = obj[key] * times;
  }
}
```
