// 5. จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj, times) {
  for (let key in obj) {
    if (typeof obj[key] !== "number") continue;
    obj[key] = obj[key] * times;
  }
}

multiplyNumeric(menu, 3);
console.log(menu);
