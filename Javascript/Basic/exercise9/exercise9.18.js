function draw(n) {
  let star = "";
  for (let i = n; i >= 1; i--) {
    for (let j = n; j >= 1; j--) {
      j <= i ? (star += "*") : (star += "-");
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
