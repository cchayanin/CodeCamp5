function draw(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      star += "*";
    }
    for (let k = 0; k < i; k++) {
      star += "-";
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
