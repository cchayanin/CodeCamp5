## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา

```javascript
let key = prompt("Enter key: ");
let obj = {};

while (key !== "stop") {
  let value = prompt("Enter value:");
  obj[key] = value;
  key = prompt("Enter key: ");
}

console.log(obj);
```

### 2. ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

```javascript
let key = prompt("Enter fruit: ");
let obj = {};

while (key !== "stop") {
  let value = +prompt(`Enter amount of ${key}: `);

  if (value > 1) {
    key += "s";
  }

  obj[key] = value;
  key = prompt("Enter fruit: ");
}

console.log(obj);
```