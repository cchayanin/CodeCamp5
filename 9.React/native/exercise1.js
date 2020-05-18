Function.prototype.defer = function (millisec) {
  setTimeout(this, millisec);
};

function f() {
  console.log("Hello!");
}

f.defer(1000);
