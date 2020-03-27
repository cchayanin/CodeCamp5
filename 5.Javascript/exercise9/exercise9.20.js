function draw(n) {
  let star = "";
  let count = 1;
  let line = 2 * n - 1;
  let column = n;
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= column; j++) {
      if (i <= n) {
        j >= column - i + 1 ? (star += String(count++)) : (star += "-");
      } else {
        j >= i - column + 1 ? (star += String(count++)) : (star += "-");
      }
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
