## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. กำหนดให้ salaries เป็น Object ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0

```
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
```

```javascript
function sumSalaries(salaries) {
  let sum = 0;

  for (let key in salaries) sum += salaries[key];

  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));
```

```javascript
function sumSalaries(salaries) {
  //Summary with Reduce
  return Object.values(salaries).reduce((total, value) => {
    return total + value;
  }, 0);
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));
```

### 2. ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object

```
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
```

```javascript
function count(obj) {
  let count = 0;
  for (let key in obj) count++;
  return count;
}

let user = {
  name: "John",
  age: 30,
};
console.log(count(user));
```
