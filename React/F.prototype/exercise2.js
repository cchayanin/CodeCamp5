function Cat(name) {
  this.name = name;
}

let kitten = new Cat();
let kitten2 = new kitten.constructor("Phena");
console.log(kitten2.name); //* Phena

console.log(kitten.constructor);
