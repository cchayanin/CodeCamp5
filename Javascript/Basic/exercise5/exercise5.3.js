// 3. ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
//      ถ้าคะแนน มากกว่าเท่ากับ 80      ได้ A
//      ถ้าคะแนน อยู่ระหว่าง 70 - 79    ได้ B
//      ถ้าคะแนน อยู่ระหว่าง 60 - 69    ได้ C
//      ถ้าคะแนน อยู่ระหว่าง 50 - 59    ได้ D
//      ถ้าคะแนน น้อยกว่า 50           ได้ F

let score = prompt("กรุณาระบุคะแนน");

if (score >= 80) {
  alert("Grade A");
} else if (score >= 70) {
  alert("Grade B");
} else if (score >= 60) {
  alert("Grade C");
} else if (score >= 50) {
  alert("Grade D");
} else {
  alert("Grade F");
}

// score >= 80
//   ? alert("Grade A")
//   : score >= 70
//   ? alert("Grade B")
//   : score >= 60
//   ? alert("Grade C")
//   : score >= 50
//   ? alert("Grade D")
//   : alert("Grade F");
