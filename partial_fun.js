const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const first = function(str) {
  return str[0];
};
const map = function(fun, arr) {
  return arr.map(fun);
};
console.log(first("Test"));
console.log(map(first, ["Test", "Rest"]));

const map = curry(function(fun, arr) {
  return arr.map(fun);
});
const firstLetters = map(first);

console.log(firstLetters(["Test", "Rest"]));
