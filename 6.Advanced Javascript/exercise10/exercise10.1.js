// ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()

// 1.1 array1 = [1, 2, 30, 400]
// array2 [2, 4, 60, 800]
let array1 = [1, 2, 30, 400].map(x => {
  return x * 2;
});
console.log(array1);
//------------------------------------------------
// 1.2 array1 = [1, 2, 3, 4]
// array2 ["1", "2", "3", "4"]
let array2 = [1, 2, 3, 4].map(x => {
  return x.toString();
});
console.log(array2);
//------------------------------------------------
// 1.3 array1 = [1, "1", 2, {}]
// array2 ["number", "string", "number", "object"]
let array3 = [1, "1", 2, {}].map(x => {
  return typeof x;
});
console.log(array3);
//------------------------------------------------
// 1.4 array1 = ["apple", "banana", "orange"]
// array2 ["APPLE", "BANANA", "ORANGE"]
let array4 = ["apple", "banana", "orange"].map(x => {
  return x.toUpperCase();
});
console.log(array4);
//------------------------------------------------
// 1.5 array1 = [
// { name: "apple", age: 14 },
// { name: "banana", age: 18 },
// { name: "watermelon", age: 32 },
// ]
// array2 ["apple", "banana", "watermelon"]
let array5 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 }
].map(x => {
  return x.name;
});
console.log(array5);
//------------------------------------------------
// 1.6 array1 = [
// { name: "apple", age: 14 },
// { name: "banana", age: 18 },
// { name: "watermelon", age: 32 },
// ]
// array2 [14, 18, 32]
let array6 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 }
].map(x => {
  return x.age;
});
console.log(array6);
//------------------------------------------------
// 1.7 array1 = [
// { name: "apple", surname: "London" },
// { name: "banana", surname: "Bangkok" },
// { name: "watermelon", surname: "Singapore" },
// ]
// array2 ["apple London", "banana Bangkok", "watermelon Singapore"]
let array7 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" }
].map(x => {
  return `${x.name} ${x.surname}`;
});
console.log(array7);
//------------------------------------------------
// 1.8 array1 = [1,3,4,5,6,7,8]
// array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]
let array8 = [1, 3, 4, 5, 6, 7, 8].map(x => {
  if (x % 2 == 0) return "even";
  else return "odd";
});
console.log(array8);
//------------------------------------------------
// 1.9 array1 = [1, -3, 2, 8, -4, 5]
// array2 [1, 3, 2, 8, 4, 5]
let array9 = [1, -3, 2, 8, -4, 5].map(x => {
  return Math.abs(x);
});
console.log(array9);
//------------------------------------------------
// 1.10 array1 = [100, 200.25, 300.84, 400.3]
// array2 ["100.00", "200.25", "300.84", "400.30"]
let array10 = [100, 200.25, 300.84, 400.3].map(x => {
  return x.toFixed(2);
});
console.log(array10);
//------------------------------------------------
// 1.11 array1 = [
// { name: "apple", birth: "2000-01-01" },
// { name: "banana", birth: "1990-10-01" },
// { name: "watermelon", birth: "1985-12-01" },
// ]
// array2 [
// { name: "apple", birth: "2000-01-01", age: 19 },
// { name: "banana", birth: "1990-10-01", age: 29 },
// { name: "watermelon", birth: "1985-12-01", age: 33 },
// ]
let array11 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" }
].map(x => {
  let birth = new Date(x.birth);
  let now = new Date();
  x.age = Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 365));
  return x;
});
console.log(array11);
//------------------------------------------------
// 1.12 array1 = [
// { name: "apple", birth: "2000-01-01" },
// { name: "banana", birth: "1990-10-10" },
// { name: "watermelon", birth: "1985-12-30" },
// ]
// array2 [
// "<tr>
// <td>apple</td>
// <td>01 jan 2000</td>
// </tr>",
// "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
// "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
// ]
let array12 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" }
].map(x => {
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
    "dec"
  ];
  let birth = new Date(x.birth);
  let date = "" + birth.getDate();

  if (date < 2) date = "0" + date;

  let formatted_date = `${date} ${
    months[birth.getMonth()]
  } ${birth.getFullYear()}`;

  return `<tr><td>${x.name}<td> <td>${formatted_date}<td><tr>`;
});
console.log(array12);
