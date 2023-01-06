const name = "Beckham";
console.log(`My name is ${name}`);

let number = 1;

// Print nilai dari variable number, dan tambahkan dengan 1
number += number + 1;
console.log(number);

// Salin kedua baris diatas dan tempelkan dibaris bawah sebanyak 4 kali
number += 1;
number += 1;
number += 1;
number += 1;
console.log(number);

// for (let number1 = 1; number1 <= 100; number1++) {
//   if (number1 % 3 === 0) {
//     console.log("Multiple of 3");
//   }
//   console.log(number1);
// }

// function sayHello(name) {
//   return `Hello, ${name}!`;
// }

// let n = "N";
// console.log(sayHello(n));

// With return
function sum1(num1, num2) {
  return num1 + num2;
}

// Without return, so the function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}

console.log(sum1(1, 2));
console.log(sum(3, 4));

// Named function
function rocketToMars1() {
  return "BOOM1!";
}

// Anonymous function
const rocketToMars = function () {
  return "BOOM!";
};

console.log(rocketToMars1());
console.log(rocketToMars());
