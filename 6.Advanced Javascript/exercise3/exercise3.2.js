// 2. ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

let key = prompt("Enter fruit: ");
let obj = {};

while (key !== "stop") {
  let value = +prompt(`Enter amount of ${key}: `);

  if (value > 1) {
    key += "s";
  }

  obj[key] = value;
  key = prompt("Enter fruit: ");
}

console.log(obj);
