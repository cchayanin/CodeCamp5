// ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()

// 2.1  array1 = [1, 2, 30, 400]
//      array2 [30, 400] // filter เลขที่มากกว่า 10
let array1 = [1, 2, 30, 400].filter((value) => value > 10);
console.log(array1);
//------------------------------------------------------------------------------
// 2.2  array1 = [1, 2, 3, 4]
//      array2 [1, 3] // filter เลขคี่
let array2 = [1, 2, 3, 4].filter((value) => value % 2 == 1);
console.log(array2);
//------------------------------------------------------------------------------
// 2.3  array1 = [1, "1", 2, {}]
//      array2 [1, 2] // filter Number
let array3 = [1, "1", 2, {}].filter((value) => typeof value === "number");
console.log(array3);
//------------------------------------------------------------------------------
// 2.4  array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
//      array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6
let array4 = ["apple", "banana", "orange", "pineapple", "watermeon"].filter(
  (value) => value.length > 6
);
console.log(array4);
//------------------------------------------------------------------------------
// 2.5 array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]
//   array2 [
//     { name: "apple", age: 14 },
//     { name: "pineapple", age: 16 },
//   ] // filter age < 18
let array5 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
].filter((value) => value.age < 18);
console.log(array5);
//------------------------------------------------------------------------------
// 2.6 array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]
//   array2 [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ] // filter ไม่เอาคนที่อายุ 32
let array6 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
].filter((value) => value.age != 32);
console.log(array6);
//------------------------------------------------------------------------------
// 2.7  array1 = [1, -3, 2, 8, -4, 5]
//      array2 [1, 2, 8, 5] // filter เลขบวก
let array7 = [1, -3, 2, 8, -4, 5].filter((value) => value > 0);
console.log(array7);
//------------------------------------------------------------------------------
// 2.8  array1 = [1,3,4,5,6,7,8]
//      array2 [3, 6] // filter เลขหาร 3 ลงตัว
let array8 = [1, 3, 4, 5, 6, 7, 8].filter((value) => value % 3 == 0);
console.log(array8);
//------------------------------------------------------------------------------
// 2.9  array1 = ["peach", 1, -3, "2", {}, []]
//      array2 ["peach", "2"] // filter string
let array9 = ["peach", 1, -3, "2", {}, []].filter(
  (value) => typeof value == "string"
);
console.log(array9);
//------------------------------------------------------------------------------
// 2.10 array1 = ["APPLE", "appLE", "PEACH", "PEach"]
//      array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว
let array10 = ["APPLE", "appLE", "PEACH", "PEach"].filter(
  (value) => value === value.toUpperCase()
);
console.log(array10);
//------------------------------------------------------------------------------
// 2.11 array1 = [
//     { name: "apple", birth: "2001-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//     { name: "peach", birth: "2002-10-13" },
//   ]
//   array2 [
//     { name: "banana", birth: "1990-10-10" },
//       { name: "peach", birth: "2002-10-13" },
//   ] // filter คนเกิดเดือน 10
let array11 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
].filter((value) => new Date(value.birth).getMonth() == 9);
console.log(array11);
//------------------------------------------------------------------------------
// 2.12 array1 = [
//     { name: "apple", birth: "2001-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//     { name: "peach", birth: "2002-10-13" },
//   ]
//   array2 [
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//   ] // filter คนเกิดก่อนปี 2000
let array12 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
].filter((value) => new Date(value.birth).getFullYear() < 2000);
console.log(array12);
