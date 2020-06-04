## CodeCamp # 5

## ชญานิน ชลหาญ

**Lab - 1**
- ทำ ใช้ setTimeout เพื่อให้ console.log(input) เมื่อเวลาผ่านไป 1 วินาที เป็น Promise ที่ชื่อ function ว่า setTimeoutAndLog(input) แล้วลองเรียกใช้ดู
- ใช้ Promise จากข้อที่ 1 แล้วทำให้สามารถได้ผลลัพท์แบบเดียวกันกับ Lab ก่อนหน้า 
  - ผ่านไป 1 วินาทีแล้ว console.log(‘a’)
  - ผ่านไป 1 วินาทีแล้ว console.log(‘b’)
  - ผ่านไป 1 วินาทีแล้ว console.log(‘c’)
  - ผ่านไป 1 วินาทีแล้ว console.log(‘d’)


```javascript
function setTimeoutAndLog(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(input);
      resolve();
    }, 1000);
  });
}

setTimeoutAndLog("A")
  .then(() => setTimeoutAndLog("B"))
  .then(() => setTimeoutAndLog("C"))
  .then(() => setTimeoutAndLog("D"));
```
