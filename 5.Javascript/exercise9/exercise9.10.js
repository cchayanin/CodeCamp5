function draw(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      star += String(j * i);
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
