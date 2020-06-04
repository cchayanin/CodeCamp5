## CodeCamp # 5

## ชญานิน ชลหาญ

### 1. การทำงานของ code ดังกล่าวจะได้อะไรออกมา

```javascript
let user = {
  name: "John",
  go: function() {
    alert(this.name);
  }
}(user.go)();
```

## `John`

### 2. การทำงานของ code ดังกล่าวจะได้อะไรออกมา

```javascript
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // What's the result?
```

## `Undefined`

### 3. สร้าง object calculator จาก 3 methods นี้:

- read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
- sum() คืนค่าผลบวกของ 2 ค่านั้น.
- mul() คืนค่าผลคูณของ 2 ค่านั้น.

```javascript
let calculator = {
  read() {
    this.number1 = +prompt("Enter First number");
    this.number2 = +prompt("Enter Second number");
  },
  sum() {
    return this.number1 + this.number2;
  },
  mul() {
    return this.number1 * this.number2;
  }
};
```

---

### 4. ให้ Object ชื่อ ladder มีmethod ขึ้น และ ลง

### 4(ต่อ). Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

```
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
```

### 4(ต่อ). ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

```
ladder.up().up().down().showStep();
```

---

```javascript
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    // shows the current step
    console.log(this.step);
  }
};
```
