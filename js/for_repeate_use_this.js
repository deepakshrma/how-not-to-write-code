// remove all odd and multiply 5, so that u get all number divisible by 10

//Data set
let data = [1, 2, 3, 4, 5];
const MULTIPLIER = 5;
//Data set

//Example 1
let mapped = [];
for (let index = 0, len = data.length; index < len; index++) {
  if (data[index] % 2 == 0) mapped.push(data[index] * MULTIPLIER);
}
console.log(mapped);

//Example 2
mapped = [];
mapped = data.reduce((curr, next) => {
  if (next % 2 == 0) curr = [...curr, next * MULTIPLIER];
  return curr;
}, []);
console.log(mapped);

//Break down
mapped = [];
const isEven = num => num % 2 == 0;
const accumulator = (records, num) => {
  // push the current numb at last and create new array
  if (isEven(num)) {
    records = [...records, num * MULTIPLIER];
  }
  return records;
};
mapped = data.reduce(accumulator, []);
console.log(mapped);
