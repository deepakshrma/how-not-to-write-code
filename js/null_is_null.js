class Person {
  constructor(name) {
    this.name = name || null;
  }
}
var deepak = new Person();
// how they check
if (deepak.name == null) {
  console.log("null")
}
console.log(deepak.name && true); // null
deepak = new Person("");
console.log(deepak.name && true); // null
deepak = new Person(false);
console.log(deepak.name && true); // null
deepak = new Person(0);
console.log(deepak.name && true); // null

// Better option
const NO_NAME = Symbol();
class BetterPerson {
  constructor(name) {
    this.name = name || NO_NAME;
  }
  hasName() {
    return this.name !== NO_NAME;
  }
}
deepak = new BetterPerson(0);
console.log(deepak.hasName()); // false
deepak = new BetterPerson("deepak");
console.log(deepak.hasName()); // true
