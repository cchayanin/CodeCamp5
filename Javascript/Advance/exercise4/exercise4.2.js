// 2. ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false

function isEmpty(obj) {
  for (let _ in obj) return false;
  return true;
}

let obj1 = {};
let obj2 = {
  name: "Ice"
};

console.log(isEmpty(obj1));
console.log(isEmpty(obj2));
