## CodeCamp # 5

## ชญานิน ชลหาญ

### Prototypal inheritance

1. ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร  
```javascript
let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1) true

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2) null

delete animal.jumps;

alert( rabbit.jumps ); // ? (3) undefined
```
2. ใช้ __proto__ ในการกำหนด prototype object ดังนี้  
    pockets → bed → table → head.
```javascript
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
```
***solution***
```javascript
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
```
3. การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป
```javascript
let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

//* rabbit ได้ property full
```

4. การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี
```javascript
let hamster = {
  stomach: [],

  //   eat(food) {
  //     this.stomach.push(food);
  //   }

  eat(food) {
    this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple

```