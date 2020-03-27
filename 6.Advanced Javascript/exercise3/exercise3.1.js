// 1. ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา

let key = prompt("Enter key: ");
let obj = {};

while (key !== "stop") {
  let value = prompt("Enter value:");
  obj[key] = value;
  key = prompt("Enter key: ");
}

console.log(obj);
