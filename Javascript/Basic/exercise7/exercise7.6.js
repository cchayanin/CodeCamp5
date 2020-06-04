// 6. ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
// ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น

function saveSecret() {
  let secret = Number(document.getElementById("secret").value);
  document.getElementById("secret").value = "";
  document.getElementById("secret").focus();
  if (isNaN(secret)) {
    alert("กรุณากรอกเฉพาะตัวเลข");
  } else if (secret < 1 || secret > 100) {
    alert("ตัวเลขต้องมีค่าระหว่าง 1 - 100");
  } else {
    let guest;
    while (true) {
      guest = Number(prompt("ทายตัวเลข"));
      if (guest === null) {
        alert("ยกเลิก");
        break;
      } else if (isNaN(guest)) {
        alert("กรุณากรอกเฉพาะตัวเลข");
      } else if (guest < 1 || guest > 100) {
        alert("ตัวเลขต้องมีค่าระหว่าง 1 - 100");
      } else {
        if (secret === guest) {
          alert("ถูกต้อง");
          break;
        } else if (secret < guest) {
          alert("มากกว่า");
        } else {
          alert("น้อยกว่า");
        }
      }
    }
  }
}
