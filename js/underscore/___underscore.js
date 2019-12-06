const property = Symbol();
class Something {
  constructor() {
    this[property] = "test";
  }
}
var instance = new Something();
console.log(instance["property"]); // undefined
console.log(instance); // Something { [Symbol()]: 'test' }

class Person {
  constructor(nm) {
    this.setName = function (name) {
      nm = name;
    };
    this.getName = function () {
      return nm;
    };
  }
}
const person = new Person("deepak");
console.log(person.getName()); // "deepak"
person.setName("kapeed");
console.log(person.getName()); // "kapeed"

function PersonF(nm) {
  this.setName = function (name) {
    nm = name;
  };
  this.getName = function () {
    return nm;
  };
}
const personf = new PersonF("deepak");
console.log(personf.getName()); // "deepak"
personf.setName("kapeed");
console.log(personf.getName()); // "kapeed"
