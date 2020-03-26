function draw(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    star += "*";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
