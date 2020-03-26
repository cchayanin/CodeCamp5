function draw(n) {
  let star = "";
  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      star += String(i);
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
