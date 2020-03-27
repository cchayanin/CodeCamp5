// 4.ให้ Object ชื่อ ladder มี method ขึ้น และ ลง
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

// 4(ต่อ). Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

// 4(ต่อ). ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
ladder
  .up()
  .up()
  .down()
  .showStep();
