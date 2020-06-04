// 3. สร้าง object calculator จาก 3 methods นี้:
// read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
// sum() คืนค่าผลบวกของ 2 ค่านั้น.
// mul() คืนค่าผลคูณของ 2 ค่านั้น.

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

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
