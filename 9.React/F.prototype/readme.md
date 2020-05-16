## CodeCamp # 5

## ชญานิน ชลหาญ

### F.prototype

1. จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา
```javascript
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true
```
- ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา
```javascript
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit.eats); //* true
```
- ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
```javascript
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

`Rabbit.prototype.eats = false;`

console.log(rabbit.eats); //* false
```
- ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
```javascript
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

`delete rabbit.eats;`

console.log(rabbit.eats); //* true
```
- ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
```javascript
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

`delete Rabbit.prototype.eats;`

console.log(rabbit.eats); //* undefined
```

2. ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
```javascript
let obj2 = new obj.constructor();// ได้
```
***example***
```javascript
function Cat(name) {
  this.name = name;
}

let kitten = new Cat();
let kitten2 = new kitten.constructor("Phena");
console.log(kitten2.name); //* Phena
```