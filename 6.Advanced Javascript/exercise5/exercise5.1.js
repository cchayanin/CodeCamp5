// 1. การทำงานของ code ดังกล่าวจะได้อะไรออกมา

let user = {
  name: "John",
  go: function() {
    alert(this.name);
  }
};

(user.go)();
