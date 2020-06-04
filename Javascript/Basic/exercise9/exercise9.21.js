function draw(n) {
  let star = "";
  let line = n;
  let column = 2 * n - 1;
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < column; j++) {
      j >= line - i - 1 && j <= line + i - 1 ? (star += "*") : (star += "-");
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
