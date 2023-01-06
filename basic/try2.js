function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

console.log(getFahrenheit(15));

//Refactor
// const greaterThanFive = (num) => {
//   return num > 5 ? true : false;
// };

const greaterThanFive = (num) => (num > 5 ? true : false);

const test = 1;
const testFunc = (test) => (test ? test : false);
console.log(testFunc(2));
