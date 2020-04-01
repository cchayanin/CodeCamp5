// 2. ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object

// let user = {
//     name: 'John',
//     age: 30
//   };

//   alert( count(user) ); // 2

function count(obj) {
  let count = 0;
  for (let key in obj) count++;
  return count;
}

let user = {
  name: "John",
  age: 30
};
console.log(count(user));
