## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. ให้ arr เป็น Array สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr

```
function unique(arr) {
  /* your code */
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

alert( unique(values) ); // Hare, Krishna, :-O
```

```javascript
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];

console.log(unique(values));
```

### 2. Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )

```
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
```

```javascript
function aclean(arr) {
  let result = arr;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (
        i != j &&
        arr[i]
          .toUpperCase()
          .split("")
          .sort()
          .join("") ==
          arr[j]
            .toUpperCase()
            .split("")
            .sort()
            .join("")
      ) {
        result.splice(i, 1);
        break;
      }
    }
  }
  return result;
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
```
