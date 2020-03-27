// 1. สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
// read(): รับค่าจาก propmt สองตัว
// sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
// mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว

function Calculator() {
  this.read = () => {
    this.number1 = +prompt("Enter First number: ");
    this.number2 = +prompt("Enter Second number: ");
  };

  this.sum = () => {
    return this.number1 + this.number2;
  };

  this.mul = () => {
    return this.number1 * this.number2;
  };
}

let cal = new Calculator();
cal.read();
cal.sum();
cal.mul();
