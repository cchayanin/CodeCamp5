function draw(n) {
  let star = "";
  let count = 1;
  let line = 2 * n - 1;
  let column = 2 * n - 1;
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= column; j++) {
      if (i <= n) {
        j > n - i && j < n + i ? (star += String(count++)) : (star += "-");
      } else {
        j <= i - n || j >= column - (i - n) + 1
          ? (star += "-")
          : (star += String(count++));
      }
    }
    star += "\n";
  }

  console.log(star);
}

draw(2);
draw(3);
draw(4);
