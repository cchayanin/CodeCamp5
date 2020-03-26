function draw(n) {
  let star = "";
  let line = n;
  let column = 2 * n - 1;
  for (let i = line; i > 0; i--) {
    for (let j = column; j > 0; j--) {
      j > line - i && j < line + i ? (star += "*") : (star += "-");
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
