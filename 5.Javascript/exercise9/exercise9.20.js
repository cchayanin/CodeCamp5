function draw(n) {
  let star = "";
  let line = 2 * n - 1;
  let count = 1;
  for (let i = 1; i <= line; i++) {
    if (i <= n) {
      for (let j = 1; j <= n - i; j++) {
        star += "-";
      }
      for (let k = 1; k <= i; k++) {
        star += String(count);
        count++;
      }
      star += "\n";
    } else {
      for (let l = 1; l <= i - n; l++) {
        star += "-";
      }
      for (let m = i; m <= line; m++) {
        star += String(count);
        count++;
      }
      star += "\n";
    }
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
