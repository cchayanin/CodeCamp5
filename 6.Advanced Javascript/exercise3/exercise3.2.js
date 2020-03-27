let key = prompt("Enter fruit: ");
let obj = {};

while (key !== "stop") {
  let value = +prompt(`Enter amount of ${key}: `);

  if (value > 1) {
    key += "s";
  }

  obj[key] = value;
  key = prompt("Enter fruit: ");
}

console.log(obj);
