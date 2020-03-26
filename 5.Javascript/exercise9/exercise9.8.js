function draw(n) {
  let star = "";
  let count = 0;
  for (let i = 1; i <= n; i++) {
    star += String(count);
    count += 2;
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
