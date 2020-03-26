function draw(n) {
  let star = "";
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      star += "*";
      count = j;
    }
    for (k = count; k < n; k++) {
      star += "-";
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
