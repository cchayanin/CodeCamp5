## CodeCamp # 5

## ชญานิน ชลหาญ

**Lab - 1**
- ใช้ async/await แล้วทำให้สามารถได้ผลลัพท์แบบด้านล่าง
  - ผ่านไป 1 วินาทีแล้ว console.log(‘a’)
  - ผ่านไป 1 วินาทีแล้ว console.log(‘b’)
  - ผ่านไป 1 วินาทีแล้ว console.log(‘c’)
  - ผ่านไป 1 วินาทีแล้ว console.log(‘d’)



```javascript
function setTimeoutAndLog(input, millisec) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(input);
      resolve();
    }, millisec);
  });
}

(async () => {
  try {
    await setTimeoutAndLog("A", 1000);
    await setTimeoutAndLog("B", 1000);
    await setTimeoutAndLog("C", 1000);
    await setTimeoutAndLog("D", 1000);
  } catch (err) {
    console.log(err);
  }
})();
```
