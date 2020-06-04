## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร

```javascript
  let i = 3;

  while (i) {
    alert( i-- );
  }
```

`แสดง 1 เมื่อแสดง 1 แล้ว ค่า i ลดลงทำให้ค่า i เป็น 0 ทำให้มีค่าความจริงเป็น false`

### 2. code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่

```javascript
  let i = 0;
  while (++i < 5) alert( i );
```

```javascript
  let i = 0;
  while (i++ < 5) alert( i );
```

---

`แสดงผลไม่เหมือนกันเพราะ ++i จะเพิ่มค่าเข้าไปก่อนแล้วจึงตรวจสอบค่าความเป็นจริง จึงทำให้ ++i มีเงื่อนไขเป็น false ก่อน`

### 3. code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่

```javascript
  for (let i = 0; i < 5; i++) alert( i );
```

```javascript
  for (let i = 0; i < 5; ++i) alert( i );
```

`แสดงผลเหมือนกัน`

### 4. ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา

```javascript
for (let i = 2; i <= 10; i++) {
  console.log(i);
}
```

```javascript
let i = 2;
while (i < 11) {
  console.log(i);
  i++;
}
```

### 5. เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม

```javascript
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}
```

---

```javascript
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
```

### 6. ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย

- ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
- และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น  
  [exercise7.6.html](exercise7.6.html)  
  [exercise7.6.js](exercise7.6.js)

```javascript
function saveSecret() {
  let secret = document.getElementById("secret").value;
  document.getElementById("secret").value = "";
  if (isNaN(secret)) {
    document.getElementById("secret").value = "";
    document.getElementById("secret").focus();
    alert("กรุณากรอกเฉพาะตัวเลข");
  } else if (secret < 0 || secret > 100) {
    document.getElementById("secret").value = "";
    document.getElementById("secret").focus();
    alert("ตัวเลขต้องมีค่าระหว่าง 1 - 100");
  } else {
    let guest;
    while (true) {
      guest = prompt("ทายตัวเลข");
      if (guest === null) {
        alert("ยกเลิก");
        break;
      } else if (isNaN(guest)) {
        alert("กรุณากรอกเฉพาะตัวเลข");
      } else if (guest < 0 || guest > 100) {
        alert("ตัวเลขต้องมีค่าระหว่าง 1 - 100");
      } else {
        if (secret === guest) {
          alert("ถูกต้อง");
          break;
        } else if (Number(secret) < Number(guest)) {
          alert("มากกว่า");
        } else {
          alert("น้อยกว่า");
        }
      }
    }
  }
}
```
