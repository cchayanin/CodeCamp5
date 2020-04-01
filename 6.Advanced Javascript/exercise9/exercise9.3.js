// 3. เขียนฟังก์ชัน sumInput() ที่
// ใช้ propmt รับ value มาเก็บใน array
// หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
// คำนวณผลรวมของตัวเลขทั้งหมดใน Array

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

console.log(sumInput());
