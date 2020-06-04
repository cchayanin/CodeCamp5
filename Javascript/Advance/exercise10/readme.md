## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()

```
1.1 array1 = [1, 2, 30, 400]
array2 [2, 4, 60, 800]
```

```javascript
let array1 = [1, 2, 30, 400].map((value) => value * 2);
console.log(array1);
```

---

```
1.2 array1 = [1, 2, 3, 4]
array2 ["1", "2", "3", "4"]
```

```javascript
let array2 = [1, 2, 3, 4].map((value) => value.toString());
console.log(array2);
```

---

```
1.3 array1 = [1, "1", 2, {}]
array2 ["number", "string", "number", "object"]
```

```javascript
let array3 = [1, "1", 2, {}].map((value) => typeof value);
console.log(array3);
```

---

```
1.4 array1 = ["apple", "banana", "orange"]
array2 ["APPLE", "BANANA", "ORANGE"]
```

```javascript
let array4 = ["apple", "banana", "orange"].map((value) => value.toUpperCase());
console.log(array4);
```

---

```
1.5 array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 },
]
array2 ["apple", "banana", "watermelon"]
```

```javascript
let array5 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
].map((value) => value.name);
console.log(array5);
```

---

```
1.6 array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 },
]
array2 [14, 18, 32]
```

```javascript
let array6 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
].map((value) => value.age);
console.log(array6);
```

---

```
1.7 array1 = [
{ name: "apple", surname: "London" },
{ name: "banana", surname: "Bangkok" },
{ name: "watermelon", surname: "Singapore" },
]
array2 ["apple London", "banana Bangkok", "watermelon Singapore"]
```

```javascript
let array7 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
].map((value) => `${value.name} ${value.surname}`);
console.log(array7);
```

---

```
1.8 array1 = [1,3,4,5,6,7,8]
array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]
```

```javascript
let array8 = [1, 3, 4, 5, 6, 7, 8].map((value) => {
  if (value % 2 == 0) return "even";
  return "odd";
});
console.log(array8);
```

---

```
1.9 array1 = [1, -3, 2, 8, -4, 5]
array2 [1, 3, 2, 8, 4, 5]
```

```javascript
let array9 = [1, -3, 2, 8, -4, 5].map((value) => Math.abs(value));
console.log(array9);
```

---

```
1.10 array1 = [100, 200.25, 300.84, 400.3]
array2 ["100.00", "200.25", "300.84", "400.30"]
```

```javascript
let array10 = [100, 200.25, 300.84, 400.3].map((value) => value.toFixed(2));
console.log(array10);
```

---

```
1.11 array1 = [
{ name: "apple", birth: "2000-01-01" },
{ name: "banana", birth: "1990-10-01" },
{ name: "watermelon", birth: "1985-12-01" },
]
array2 [
{ name: "apple", birth: "2000-01-01", age: 19 },
{ name: "banana", birth: "1990-10-01", age: 29 },
{ name: "watermelon", birth: "1985-12-01", age: 33 },
]
```

```javascript
let array11 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
].map((arr) => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const birth = new Date(arr.birth).getTime();
  const now = new Date().getTime();
  const diffTime = now - birth;

  arr.age = Math.floor(diffTime / (DAY * 365));
  return arr;
});
console.log(array11);
```

---

```
1.12 array1 = [
{ name: "apple", birth: "2000-01-01" },
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" },
]
array2 [
"<tr>
<td>apple</td>
<td>01 jan 2000</td>
</tr>",
"<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
"<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
]
```

```javascript
let array12 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
].map((value) => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  let birth = new Date(value.birth);
  let date = `${birth.getDate()}`;

  if (date.length < 2) date = `0${date}`;

  let formatted_date = `${date} ${
    months[birth.getMonth()]
  } ${birth.getFullYear()}`;

  return `<tr><td>${value.name}<td> <td>${formatted_date}<td><tr>`;
});
console.log(array12);
```

### ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()

```
2.1  array1 = [1, 2, 30, 400]
array2 [30, 400] // filter เลขที่มากกว่า 10
```

```javascript
let array1 = [1, 2, 30, 400].filter((value) => value > 10);
console.log(array1);
```

---

```
2.2  array1 = [1, 2, 3, 4]
array2 [1, 3] // filter เลขคี่
```

```javascript
let array2 = [1, 2, 3, 4].filter((value) => value % 2 == 1);
console.log(array2);
```

---

```
2.3  array1 = [1, "1", 2, {}]
array2 [1, 2] // filter Number
```

```javascript
let array3 = [1, "1", 2, {}].filter((value) => typeof value === "number");
console.log(array3);
```

---

```
2.4  array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6
```

```javascript
let array4 = ["apple", "banana", "orange", "pineapple", "watermeon"].filter(
  (value) => value.length > 6
);
console.log(array4);
```

---

```
2.5 array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 },
{ name: "pineapple", age: 16 },
{ name: "peach", age: 24 },
]
array2 [
{ name: "apple", age: 14 },
{ name: "pineapple", age: 16 },
] // filter age < 18
```

```javascript
let array5 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
].filter((value) => value.age < 18);
console.log(array5);
```

---

```
2.6 array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 },
{ name: "pineapple", age: 16 },
{ name: "peach", age: 24 },
]
array2 [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "pineapple", age: 16 },
{ name: "peach", age: 24 },
] // filter ไม่เอาคนที่อายุ 32
```

```javascript
let array6 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
].filter((value) => value.age != 32);
console.log(array6);
```

---

```
2.7  array1 = [1, -3, 2, 8, -4, 5]
array2 [1, 2, 8, 5] // filter เลขบวก
```

```javascript
let array7 = [1, -3, 2, 8, -4, 5].filter((value) => value > 0);
console.log(array7);
```

---

```
2.8  array1 = [1,3,4,5,6,7,8]
array2 [3, 6] // filter เลขหาร 3 ลงตัว
```

```javascript
let array8 = [1, 3, 4, 5, 6, 7, 8].filter((value) => value % 3 == 0);
console.log(array8);
```

---

```
2.9  array1 = ["peach", 1, -3, "2", {}, []]
array2 ["peach", "2"] // filter string
```

```javascript
let array9 = ["peach", 1, -3, "2", {}, []].filter(
  (value) => typeof value == "string"
);
console.log(array9);
```

---

```
2.10 array1 = ["APPLE", "appLE", "PEACH", "PEach"]
array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว
```

```javascript
let array10 = ["APPLE", "appLE", "PEACH", "PEach"].filter(
  (value) => value === value.toUpperCase()
);
console.log(array10);
```

---

```
2.11 array1 = [
{ name: "apple", birth: "2001-01-01" },
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" },
{ name: "peach", birth: "2002-10-13" },
]
array2 [
{ name: "banana", birth: "1990-10-10" },
{ name: "peach", birth: "2002-10-13" },
] // filter คนเกิดเดือน 10
```

```javascript
let array11 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
].filter((value) => new Date(value.birth).getMonth() == 9);
console.log(array11);
```

---

```
2.12 array1 = [
{ name: "apple", birth: "2001-01-01" },
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" },
{ name: "peach", birth: "2002-10-13" },
]
array2 [
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" },
] // filter คนเกิดก่อนปี 2000
```

```javascript
let array12 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
].filter((value) => new Date(value.birth).getFullYear() < 2000);
console.log(array12);
```
