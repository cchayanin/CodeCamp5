function draw(n) {
  let star = "";
  for (let i = 1; i <= n + (n - 1); i++) {
    if (i <= n) {
      for (let j = 1; j <= i; j++) {
        star += "*";
      }
      for (let k = 1; k <= n - i; k++) {
        star += "-";
      }
      star += "\n";
    } else {
      for (let l = i; l <= n + (n - 1); l++) {
        star += "*";
      }
      for (let m = 1; m <= i - n; m++) {
        star += "-";
      }
      star += "\n";
    }
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
