function draw(n) {
  let star = "";
  let count = 2;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 1; j++) {
      star += String(count);
      count += 2;
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
