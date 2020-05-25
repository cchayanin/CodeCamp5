## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร

```javascript
  alert( null || 2 || undefined );
  alert( alert(1) || 2 || alert(3) );
  alert( 1 && null && 2 );
  alert( alert(1) && alert(2) );
  alert( null || 2 && 3 || 4 );
```

---

```javascript
  alert(null || 2 || undefined); //2 เพราะมีค่าความจริงเป็น true

  alert(alert(1) || 2 || alert(3)); //1 2 แสดงคำสั่ง alert(1) ก่อนจากนั้นตรวจหาความความจริงและได้ค่าความจริงเป็น false จากนั้น return 2 เพระามีค่าความจริงเป็น true

  alert(1 && null && 2); //null เพราะ null มีค่าความจริงเป็น false

  alert(alert(1) && alert(2)) //แสดงคำสั่ง alert(1) และ return undefine เพราะเป็นค่าของ alert(1)

  alert(null || 2 && 3 || 4); //3 เพราะจะทำ 2&&3 ก่อน เมื่อเป็นจริงทั้งสองค่า จะคืนค่าตัวสุดท้าย คือ 3 จากนั้น ทำ or เมื่อเจอค่าความจริงเป็น true จึง return 3
```

### 2. เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60

### 3. เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60

```javascript
 let age = prompt("กรุณาระบุอายุ");
      if (age >= 18 && age <= 60) {
        alert("คุณมีอายุอยู่ระหว่าง 18 - 60");
      } else if (age < 18 || age > 60) {
        alert("อายุไม่อยู่ระหว่าง 18 - 60");
      } else {
        alert("ข้อมูลไม่ถูกต้อง");
      }
```

### 4. คำสั่ง alert ไหนที่จะถูกรันบ้าง

```javascript
  if (-1 || 0) alert( 'first' );
  if (-1 && 0) alert( 'second' );
  if (null || -1 && 0) alert( 'third' );
```

---

```javascript
if (-1 || 0) alert("first"); //แสดง เพราะมีค่าความจริงเป็น true
if (-1 && 0) alert("second"); //ไม่แสดง เพราะมีค่าความจริงเป็น false
if (null || (-1 && 0)) alert("third"); //ไม่แสดง มีค่าความจริงเป็น false เพราะ -1 && 0 จะทำก่อนและได้ค่าความจริงเป็น false จากนั้นเมื่อมา or กับ null ซึ่งจะได้ค่าความจริงเป็น false
```

### 5. ให้เขียนระบบ login

- ให้ใช้ prompt ในการถามใครเป็นคน login
- ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
- วิธีเช็ค Password
- ถ้า string นั้นเป็น “codecamp#5” ให้ alert “ยินดีต้อนรับ”
- ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”
- ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”
- ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”
- ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”

```javascript
let user = prompt("คุณคือใคร");

if (user === "Admin") {
  let password = prompt("Password");
  if (password === "codecamp#5") {
    alert("ยินดีต้อนรับ");
  } else if (password === "" || password === null) {
    alert("ยกเลิก");
  } else {
    alert("Wrong password");
  }
} else {
  if (user === "" || user === null) {
    alert("ยกเลิก");
  } else {
    alert("ผมไม่รู้จักคุณ");
  }
}
```
