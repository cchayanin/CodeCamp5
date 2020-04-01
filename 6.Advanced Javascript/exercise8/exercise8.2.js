// 2. เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false

function checkSpam(string) {
  let spam = ["xxx", "viagra"];
  for (let word of spam) {
    if (string.includes(word)) return true;
  }
  return false;
}

console.log(checkSpam("Helloxxx"));

console.log(checkSpam("This is a viagra"));

console.log(checkSpam("Hi,I'm John"));
