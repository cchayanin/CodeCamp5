// 4. จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function sum(obj) {
  let total = 0;

  for (let key in obj) {
    total = total + obj[key];
  }

  return total;
}

console.log(sum(salaries));
