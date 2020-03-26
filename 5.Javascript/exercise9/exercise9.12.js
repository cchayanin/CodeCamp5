function draw(n) {
  let star = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n; j++) {
      i == j ? (star += "-") : (star += "*");
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
