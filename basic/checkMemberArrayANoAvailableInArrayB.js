// Check Member ArrayA No Available In ArrayB
const a = [1, 2, 3, 4, 5];
const b = [1, 2, 9, 8];

const myArray = a.filter(function (el) {
  return b.indexOf(el) < 0;
});

console.log('result' ,myArray);