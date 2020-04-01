## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. ผลลัพธ์ของความยาว array คืออะไร

```javascript
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert(fruits.length); // ?
```

`4`

### 2. ให้ทำตามขั้นตอนต่อไปนี้

- สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
- เพิ่ม “Rock-n-Roll” ต่อท้าย
- นำค่า Classics ไปทับค่าตรงกลางของ Array
- นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
- เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array

```javascript
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
styles[1] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);
```

### 3. เขียนฟังก์ชัน sumInput() ที่

- ใช้ propmt รับ value มาเก็บใน array
- หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
- คำนวณผลรวมของตัวเลขทั้งหมดใน Array

```javascript
function sumInput() {
  let input = +prompt("กรุณาป้อนค่าตัวเลข");
  let arr = new Array();
  let sum = 0;

  while (!isNaN(input)) {
    arr.push(input);
    input = +prompt("กรุณาป้อนค่าตัวเลข");
  }

  for (let value of arr) sum += value;

  return sum;
}
```

### 4. Maximal contiguous subarray (**Optional**) ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน

```javascript
getMaxSubSum([-1, `2, 3`, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([`2, -1, 2, 3`, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, `11`]) == 11
getMaxSubSum([-2, -1, `1, 2`]) == 3
getMaxSubSum([`100`, -9, 2, -3, 5]) == 100
getMaxSubSum([`1, 2, 3`]) == 6 (take all)
```

---

```javascript
function getMaxSubSum(arr) {
  let sum = 0;
  let tmp = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    if (tmp < arr[i]) tmp = arr[i];

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (tmp < sum) tmp = sum;
    }
  }

  return tmp;
}
```
