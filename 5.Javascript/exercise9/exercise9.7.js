function draw(n) {
  let star = "";
  let count = n ** 2;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      star += String(count);
      count--;
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
