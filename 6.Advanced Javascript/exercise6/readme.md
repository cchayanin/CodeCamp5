## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้

- read(): รับค่าจาก propmt สองตัว
- sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
- mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว

```javascript
function Calculator() {
  this.read = () => {
    this.number1 = +prompt("Enter First number: ");
    this.number2 = +prompt("Enter Second number: ");
  };

  this.sum = () => {
    return this.number1 + this.number2;
  };

  this.mul = () => {
    return this.number1 * this.number2;
  };
}
```

---

### 2. สร้าง constructor function Accumulator(startingValue)

- โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue
- ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value  
  พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue

```javascript
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    let tmp = +prompt("Enter number");
    this.value += tmp;
  };
}
```
